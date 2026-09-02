import SiteFooter from "@/app/components/chrome/SiteFooter";

/** The home route's footer, with the generic background pool. */
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter seed="home" />
    </>
  );
}
