import { site } from "@/config/site";
import Logo from "./Logo";

/**
 * Rotating circular badge — our take on the Dark Horse spinning logo mark.
 * tone "dark" = dark text (for light backgrounds), "light" = light text (dark bg).
 */
export default function SpinningBadge({
  className = "",
  size = 132,
  tone = "dark",
}: {
  className?: string;
  size?: number;
  tone?: "dark" | "light";
}) {
  const label =
    `${site.firmNameShort} • CPA • ${site.city} • Tax • Advisory • `.toUpperCase();
  const textClass = tone === "light" ? "fill-cream" : "fill-ink";

  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="animate-spin-slow h-full w-full" fill="none">
        <defs>
          <path id="badge-curve" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text
          className={textClass}
          style={{ fontSize: "13px", letterSpacing: "2.5px", fontWeight: 600 }}
        >
          <textPath href="#badge-curve" startOffset="0">
            {label}
          </textPath>
        </text>
      </svg>

      {/* Static center mark — the EK silver coin */}
      <Logo className="absolute h-14 w-14 shadow-lg shadow-black/40" />
    </div>
  );
}
