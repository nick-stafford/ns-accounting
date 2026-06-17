import { site } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Per-step accent color — adds complementary contrast to the numbers
const stepColors = ["text-gold", "text-teal-bright", "text-clay", "text-gold"];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-charcoal text-cream"
    >
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-teal/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Getting started is refreshingly simple"
          intro="No confusing onboarding, no mountain of paperwork. Just four easy steps to financial peace of mind."
          tone="dark"
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.process.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <li className="relative flex h-full flex-col rounded-3xl border border-line bg-espresso p-7 transition-colors duration-300 hover:bg-espresso-2">
                <span className={`font-display text-5xl font-bold ${stepColors[i % stepColors.length]}`}>
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-sand">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
