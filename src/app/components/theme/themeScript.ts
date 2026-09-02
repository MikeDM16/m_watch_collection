/**
 * Runs before first paint, as a raw blocking <script> in <head>, so the page
 * never flashes the wrong theme. Kept as a string here rather than inline in
 * layout.tsx so it stays lintable and testable.
 *
 * Reads an explicit choice from localStorage, otherwise follows the OS.
 */
export const THEME_STORAGE_KEY = "mwc-theme";

export const themeScript = `(function(){try{
var k=${JSON.stringify(THEME_STORAGE_KEY)};
var t=localStorage.getItem(k);
var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);
var e=document.documentElement;
e.classList.toggle('dark',d);
e.style.colorScheme=d?'dark':'light';
}catch(e){}})();`;
