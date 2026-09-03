import { IconLabel } from "@/app/services/commonFunctions";
import { MapPin } from "lucide-react";

const EMAIL = "miguel_miranda96@live.com.pt";

/**
 * Contacts. A quiet closing statement on a surface tint rather than a fifth
 * full-bleed photo band. Copy and voice are unchanged.
 */
export default function ContactsComponent() {
  return (
    <section id="Contacts" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <div className="bg-muted p-[clamp(1.6rem,4vw,3.5rem)]">
          <h2 className="font-display text-display-m font-medium">Where to find me</h2>

          <div className="mt-5 max-w-[58ch] space-y-3 text-[0.9rem] leading-relaxed text-muted-foreground">
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
      </div>
    </section>
  );
}
