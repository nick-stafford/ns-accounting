/**
 * EK Accounting mark — a silver coin / medallion: brushed-silver rim with a
 * reeded (ridged) edge, a black face, and a silver "EK" in the center, with a
 * sun-glint sparkle. Self-contained SVG.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="EK Accounting">
      <defs>
        <linearGradient id="coin-metal" x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.4" stopColor="#c8cdd3" />
          <stop offset="0.52" stopColor="#ffffff" />
          <stop offset="0.7" stopColor="#bcc1c8" />
          <stop offset="1" stopColor="#9aa0a8" />
        </linearGradient>
        <radialGradient id="coin-face" cx="0.4" cy="0.34" r="0.85">
          <stop offset="0" stopColor="#1d1d21" />
          <stop offset="1" stopColor="#050506" />
        </radialGradient>
        <radialGradient id="coin-glint" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* coin body (silver rim) */}
      <circle cx="20" cy="20" r="19" fill="url(#coin-metal)" />
      {/* reeded (ridged) edge */}
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="#7e848c"
        strokeWidth="2.6"
        strokeDasharray="0.7 1.5"
      />
      {/* black face with a thin raised silver inner rim */}
      <circle cx="20" cy="20" r="15" fill="url(#coin-face)" />
      <circle cx="20" cy="20" r="15" fill="none" stroke="url(#coin-metal)" strokeWidth="1.1" />

      {/* EK */}
      <text
        x="20"
        y="20.4"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
        fontSize="12.5"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="url(#coin-metal)"
      >
        EK
      </text>

      {/* sun-glint on the rim */}
      <circle cx="30.5" cy="11.5" r="3" fill="url(#coin-glint)" />
      <path
        d="M30.5 8.7 L31.05 11 L33.3 11.5 L31.05 12 L30.5 14.3 L29.95 12 L27.7 11.5 L29.95 11 Z"
        fill="#ffffff"
      />
    </svg>
  );
}
