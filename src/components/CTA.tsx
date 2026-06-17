import { site } from "@/config/site";
import Reveal from "./Reveal";
import { IconPhone, IconMail } from "./icons";

export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold-bright via-gold to-gold-deep px-6 py-16 text-center text-ink sm:px-12">
            <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-card/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-ink/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Ready for accounting that actually feels modern?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                Book a free, no-pressure consultation. We&rsquo;ll talk through your
                goals and show you exactly how we can help.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={site.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-charcoal"
                >
                  Book a free consultation
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink/10"
                >
                  <IconPhone className="h-4 w-4" />
                  {site.phone}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-ink/75">
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-ink">
                  <IconMail className="h-4 w-4" />
                  {site.email}
                </a>
                <span className="inline-flex items-center gap-2">{site.serviceArea}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
