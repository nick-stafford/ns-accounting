import { site } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Decor from "./Decor";

export default function Testimonials() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden">
      <Decor corner="bl" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Client stories"
          title="Businesses that sleep better at night"
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-hair bg-card p-8 shadow-sm">
                <div className="flex gap-1 text-gold" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-hair pt-5">
                  <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-stone">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
