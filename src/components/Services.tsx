import { site } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Decor from "./Decor";
import { IconTax, IconBooks, IconAdvisory, IconCheck } from "./icons";

const iconMap = {
  tax: IconTax,
  bookkeeping: IconBooks,
  advisory: IconAdvisory,
} as const;

// Each service gets a distinct complementary accent for mid-page contrast.
const accents = {
  tax: {
    icon: "bg-gold/15 text-gold-deep group-hover:bg-gold group-hover:text-ink",
    check: "text-gold-deep",
    edge: "hover:border-gold/50",
  },
  bookkeeping: {
    icon: "bg-teal/12 text-teal-deep group-hover:bg-teal group-hover:text-cream",
    check: "text-teal-deep",
    edge: "hover:border-teal/50",
  },
  advisory: {
    icon: "bg-clay/12 text-clay-deep group-hover:bg-clay group-hover:text-cream",
    check: "text-clay-deep",
    edge: "hover:border-clay/50",
  },
} as const;

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden">
      <div className="dot-grid absolute inset-0 -z-0 opacity-60" />
      <Decor corner="tr" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Full-service finance & accounting, without the overwhelm"
          intro="Everything you need to keep your finances clean, automated, and working for you, under one roof."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {site.services.map((service, i) => {
            const Icon = iconMap[service.id as keyof typeof iconMap];
            const a = accents[service.id as keyof typeof accents];
            return (
              <Reveal key={service.id} delay={i * 90}>
                <article
                  className={`group flex h-full flex-col rounded-3xl border border-hair bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 ${a.edge}`}
                >
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl transition-colors duration-300 ${a.icon}`}>
                    <Icon className="h-7 w-7" />
                  </span>

                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone">
                    {service.blurb}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-hair pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-stone">
                        <IconCheck className={`mt-0.5 h-4 w-4 shrink-0 ${a.check}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
