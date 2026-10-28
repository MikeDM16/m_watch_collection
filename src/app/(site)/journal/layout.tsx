import SiteFooter from "@/app/components/chrome/SiteFooter";

/** The Journal's leaf group owns its footer, like every other group under (site). */
export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter seed="journal" />
    </>
  );
}
