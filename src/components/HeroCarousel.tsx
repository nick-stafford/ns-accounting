"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dark Horse–style background montage: stacks several short clips and
 * crossfades from one to the next every `interval` ms, looping forever.
 */
export default function HeroCarousel({
  clips,
  poster,
  interval = 2600,
}: {
  clips: readonly string[];
  poster?: string | null;
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  // Advance the active clip on a timer (skip if user prefers reduced motion).
  useEffect(() => {
    if (clips.length <= 1) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % clips.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [clips.length, interval]);

  // Restart the freshly-activated clip from its first frame.
  useEffect(() => {
    const v = refs.current[active];
    if (!v) return;
    try {
      v.currentTime = 0;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch {
      /* autoplay can reject — ignore */
    }
  }, [active]);

  return (
    <div className="absolute inset-0">
      {clips.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          aria-hidden
          {...(poster ? { poster } : {})}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
