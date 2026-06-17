import { site } from "@/config/site";
import Marquee from "./Marquee";

export default function MarqueeBand() {
  return (
    <section className="border-y border-hair bg-paper-2/60 py-10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone">
        Works seamlessly with the tools you already use
      </p>
      <Marquee items={site.accountingTools} duration={44} />
    </section>
  );
}
