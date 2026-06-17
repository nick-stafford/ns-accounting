import { site } from "@/config/site";
import Reveal from "./Reveal";

export default function TrustBar() {
  return (
    <section className="border-b border-hair">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-display text-4xl font-bold tracking-tight text-gold-deep sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-stone">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
