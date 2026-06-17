import type { CSSProperties } from "react";

type Tool = { name: string; logo: string };

/**
 * Seamless infinite logo banner. We build ONE half-track that is itself wider
 * than any viewport (the logo list repeated until it overflows), then render
 * that half twice and scroll exactly -50%. The second half lands precisely where
 * the first began — no gap, no jump, never pauses — and because each half already
 * overflows the screen, no blank space can ever appear during the scroll.
 */
export default function Marquee({
  items,
  reverse = false,
  duration = 40,
}: {
  items: readonly Tool[];
  reverse?: boolean;
  duration?: number;
}) {
  // Repeat the list enough that one half comfortably exceeds wide/ultrawide
  // screens, then duplicate that half for the seamless -50% loop.
  const REPEATS = 3;
  const half = Array.from({ length: REPEATS }, () => items).flat();
  const track = [...half, ...half];

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""}`}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <ul className="marquee__track">
        {track.map((tool, i) => (
          <li
            key={i}
            className="mr-14 flex items-center gap-2.5 whitespace-nowrap"
            aria-hidden={i >= half.length || undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.logo}
              alt=""
              className="h-6 w-6 opacity-70"
              loading="lazy"
              decoding="async"
            />
            <span className="font-display text-base font-semibold tracking-tight text-stone">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
