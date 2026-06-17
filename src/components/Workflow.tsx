import { site } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconShield, IconPulse, IconClock, IconSparkle } from "./icons";

const icons = [IconShield, IconPulse, IconClock, IconSparkle];
const iconAccents = [
  "bg-gold/10 text-gold",
  "bg-teal/15 text-teal-bright",
  "bg-clay/15 text-clay",
  "bg-gold/10 text-gold",
];

export default function Workflow() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="The modern difference"
          title={site.workflow.heading}
          intro={site.workflow.subheading}
          tone="dark"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {site.workflow.benefits.map((benefit, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={benefit.title} delay={i * 80}>
                <div className="h-full bg-espresso p-8 transition-colors duration-300 hover:bg-espresso-2">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl ${iconAccents[i % iconAccents.length]}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-cream">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-sand">
                    {benefit.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
