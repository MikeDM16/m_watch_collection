import SiteHeader from "../components/chrome/SiteHeader";

/**
 * Local authoring tools. They sit outside the `(site)` group because they have
 * their own content shell and no footer, but they get the site header so there
 * is a way back to the collection, plus search and the theme toggle.
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)] pt-24">
        {children}
      </main>
    </>
  );
}
