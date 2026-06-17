import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-cream" : "text-ink";
  const introColor = tone === "dark" ? "text-sand" : "text-stone";
  const eyebrowColor = tone === "dark" ? "text-gold" : "text-gold-deep";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  );
}
