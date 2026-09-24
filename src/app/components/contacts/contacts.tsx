import { IconLabel } from "@/app/services/commonFunctions";
import { SOCIAL_PROFILES, type SocialProfileKey } from "@/app/siteConfig";
import { ArrowUpRight, Gavel, Instagram, MapPin, Tag, type LucideIcon } from "lucide-react";
import Link from "next/link";

const EMAIL = "miguel_miranda96@live.com.pt";

/**
 * lucide ships a real Instagram glyph but nothing for Catawiki or Vinted, so
 * those two get the nearest honest stand-in: an auction gavel and a price tag.
 * One icon family across the site, one stroke weight (see IconLabel).
 *
 * Typed as a total Record, so adding a fourth profile to SOCIAL_PROFILES without
 * giving it a glyph is a typecheck failure rather than a blank cell in the row.
 */
const PROFILE_ICONS: Record<SocialProfileKey, LucideIcon> = {
  catawiki: Gavel,
  instagram: Instagram,
  vinted: Tag,
};

/**
 * Contacts. A quiet closing statement on a surface tint rather than a fifth
 * full-bleed photo band. Copy and voice are unchanged.
 *
 * The profile ledger sits beside the email rather than in About Me: this is the
 * section already titled "Where to find me", so every way of reaching me is in
 * one place.
 */
export default function ContactsComponent() {
  return (
    <section id="Contacts" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <div className="bg-muted p-[clamp(1.6rem,4vw,3.5rem)]">
          <h2 className="font-display text-display-m font-medium">Where to find me</h2>

          {/* From md up: the email and location on the left at two thirds, the
              profile ledger on the right at a third. Below md it collapses to a
              single stacked column, email first. */}
          <div className="mt-5 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-14">
            <div>
              <div className="max-w-[58ch] space-y-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                <p>
                  If you are interested in some piece, want more information or share a correction,
                  please feel free to contact me. I would love your feedback.
                </p>
                <p>Swing by for a cup of coffee or leave me a message.</p>
              </div>

              <a
                href={`mailto:${EMAIL}`}
                className="mt-8 inline-block font-display text-[clamp(1.05rem,2.4vw,1.6rem)] font-medium tracking-tight text-brand no-underline underline-offset-[6px] hover:underline"
              >
                {EMAIL}
              </a>

              <p className="mt-6 text-sm text-muted-foreground">
                <IconLabel icon={MapPin} text="Porto, Portugal" />
              </p>
            </div>

            {/* A ledger, not a card: hairlines on the rows, nothing boxing them
                in. The rules are foreground/10 rather than border-border, which
                is only 4% off the muted panel behind it and all but vanishes. */}
            <div>
              <p className="lab">Elsewhere</p>

              <ul className="mt-3 list-none border-t border-foreground/10 p-0">
                {SOCIAL_PROFILES.map((profile) => (
                  <li key={profile.key} className="border-b border-foreground/10">
                    <Link
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-3 no-underline transition-colors hover:text-brand"
                    >
                      <IconLabel
                        icon={PROFILE_ICONS[profile.key]}
                        text={profile.label}
                        className="text-sm font-medium"
                      />
                      <ArrowUpRight
                        aria-hidden
                        strokeWidth={1.5}
                        className="ml-auto size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
