import { site } from "@/config/site";
import SpinningBadge from "./SpinningBadge";
import Logo from "./Logo";
import { IconPin, IconPhone, IconMail } from "./icons";

function SocialIcon({ label }: { label: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor" };
  if (label === "LinkedIn")
    return (
      <svg {...common}>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
      </svg>
    );
  if (label === "Instagram")
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-charcoal text-cream">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {/* Top: brand + badge */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-12 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-semibold text-cream">
                {site.firmName}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sand">
              {site.tagline} A modern {site.city} accounting firm helping individuals and
              businesses keep more of what they earn.
            </p>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright"
            >
              Book a consultation
            </a>
          </div>
          <SpinningBadge size={128} tone="light" className="shrink-0" />
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-cream">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-sand">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-gold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-cream">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-sand">
              <li className="flex items-center gap-2.5">
                <IconPin className="h-4 w-4 shrink-0 text-gold" />
                {site.address}
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <IconPhone className="h-4 w-4 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <IconMail className="h-4 w-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {site.footer.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-sand transition-colors hover:border-gold hover:text-gold"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-line py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand/70">
            Serving the Bay Area &amp; beyond
          </p>
          <div className="mt-3 flex flex-wrap gap-x-2 gap-y-2 text-sm text-sand">
            {site.footer.locations.map((loc, i) => (
              <span key={loc} className="flex items-center gap-2">
                {i > 0 && <span className="text-line">•</span>}
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-sand/70 sm:flex-row">
          <p>
            © {site.firmName}. {site.licensure}.
          </p>
          <p>For informational purposes only; not tax or financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
