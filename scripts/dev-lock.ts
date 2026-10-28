import fs from "fs";
import net from "net";
import path from "path";

/**
 * Keeps `.next` away from a dev server that is still running.
 *
 *   tsx scripts/dev-lock.ts clean   stop the running dev server, then delete .next
 *   tsx scripts/dev-lock.ts check   exit 1 if a dev server is running (prebuild)
 *
 * `npm run dev:clean` used to delete `.next` blind. With the old server still
 * on :3000 that pulled the folder out from under it: the new server never got
 * the port, and the old one went on answering every request, 404ing any route
 * it had not already compiled — every model page. A `next build` run beside a
 * live dev server does the same damage from the other side (see
 * playwright.config.ts).
 *
 * `next dev` writes { pid, port, hostname, appUrl } to .next/dev/lock and keeps
 * it while it runs.
 */

const nextDir = path.resolve(__dirname, "../.next");
const lockPath = path.join(nextDir, "dev", "lock");

interface DevServer {
  pid: number;
  port: number;
  hostname: string;
  appUrl: string;
}

function isAlive(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch (err) {
    return (err as NodeJS.ErrnoException).code === "EPERM";
  }
}

function isListening(port: number, hostname: string): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = net.connect({ port, host: hostname });
    socket.setTimeout(1000);
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("timeout", () => {
      socket.destroy();
      resolve(false);
    });
    socket.once("error", () => resolve(false));
  });
}

async function readLiveServer(): Promise<DevServer | undefined> {
  let server: DevServer;
  try {
    server = JSON.parse(fs.readFileSync(lockPath, "utf-8"));
  } catch {
    return undefined;
  }
  // A lock left behind by a crash can name a PID Windows has since handed to
  // another process, so the port has to be answering as well.
  if (!isAlive(server.pid) || !(await isListening(server.port, server.hostname))) return undefined;
  return server;
}

async function clean() {
  const server = await readLiveServer();
  if (server) {
    console.log(`Stopping the dev server at ${server.appUrl} (PID ${server.pid})`);
    process.kill(server.pid);
    const deadline = Date.now() + 10_000;
    while (await isListening(server.port, server.hostname)) {
      if (Date.now() > deadline) {
        console.error(
          `PID ${server.pid} still holds port ${server.port}. Stop it by hand: Stop-Process -Id ${server.pid} -Force`,
        );
        process.exit(1);
      }
      await new Promise((r) => setTimeout(r, 250));
    }
  }

  // The retries are for Windows, where the old server's file handles can take
  // a moment to close after it exits.
  fs.rmSync(nextDir, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 });
}

async function check() {
  const server = await readLiveServer();
  if (!server) return;
  console.error(
    `next dev is running at ${server.appUrl} (PID ${server.pid}). Stop it before building: ` +
      `build and dev corrupt each other's .next (see playwright.config.ts).`,
  );
  process.exit(1);
}

const mode = process.argv[2];
if (mode !== "clean" && mode !== "check") {
  console.error("Usage: tsx scripts/dev-lock.ts clean|check");
  process.exit(1);
}

(mode === "clean" ? clean() : check()).catch((err) => {
  console.error(err);
  process.exit(1);
});
