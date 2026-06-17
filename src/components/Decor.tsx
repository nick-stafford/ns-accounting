/**
 * Decorative overlapping rounded squares + soft color blobs for light sections.
 * Purely cosmetic — sits behind content. Place inside a `relative overflow-hidden`
 * section. `corner` picks where the cluster sits.
 */
export default function Decor({
  corner = "tr",
}: {
  corner?: "tr" | "tl" | "br" | "bl";
}) {
  const pos = {
    tr: "right-[-3rem] top-[-3rem]",
    tl: "left-[-3rem] top-[-3rem]",
    br: "right-[-3rem] bottom-[-3rem]",
    bl: "left-[-3rem] bottom-[-3rem]",
  }[corner];

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden>
      <div className={`absolute ${pos} h-72 w-72`}>
        {/* overlapping outlined squares */}
        <div className="absolute right-10 top-10 h-44 w-44 rotate-12 rounded-[2rem] border border-teal/25" />
        <div className="absolute right-24 top-24 h-32 w-32 -rotate-6 rounded-3xl border border-gold/40" />
        <div className="absolute right-4 top-28 h-24 w-24 rotate-3 rounded-2xl border border-clay/25" />
        {/* soft tinted fills */}
        <div className="absolute right-16 top-4 h-20 w-20 rotate-12 rounded-2xl bg-gold/10" />
        <div className="absolute right-32 top-16 h-16 w-16 -rotate-6 rounded-xl bg-teal/10" />
      </div>
    </div>
  );
}

/** Soft blurred color blobs — subtle ambient color for a section. */
export function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-clay/10 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
    </div>
  );
}
