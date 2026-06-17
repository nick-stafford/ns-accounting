import type { ReactNode } from "react";
import { IconArrow } from "./icons";

type Variant = "primary" | "ghost" | "ghostDark";

const styles: Record<Variant, string> = {
  // Warm gold — the main action
  primary:
    "bg-gold text-ink hover:bg-gold-bright shadow-[0_8px_30px_-8px_rgba(232,178,76,0.45)] hover:shadow-[0_12px_40px_-8px_rgba(232,178,76,0.65)]",
  // Outline on LIGHT backgrounds — fills solid gold (like the primary) on hover
  ghost:
    "bg-transparent text-ink ring-1 ring-ink/15 hover:bg-gold hover:text-ink hover:ring-gold hover:shadow-[0_8px_30px_-8px_rgba(232,178,76,0.6)]",
  // Outline on DARK backgrounds
  ghostDark:
    "bg-transparent text-cream ring-1 ring-cream/20 hover:ring-cream/45 hover:bg-cream/[0.05]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}
