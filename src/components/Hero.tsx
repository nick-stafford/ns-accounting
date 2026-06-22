import { site } from "@/config/site";
import Button from "./Button";
import HeroCarousel from "./HeroCarousel";
import { IconCheck } from "./icons";

export default function Hero() {
  const { heroVideos, heroVideo, heroVideoPoster } = site.media;
  const hasMontage = heroVideos && heroVideos.length > 0;

  return (
    <section id="top" className="relative flex min-h-[82vh] items-center overflow-hidden">
      {/* Background montage */}
      {hasMontage ? (
        <HeroCarousel clips={heroVideos} poster={heroVideoPoster} interval={3400} />
      ) : (
        heroVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden
            {...(heroVideoPoster ? { poster: heroVideoPoster } : {})}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )
      )}

      {/* Content (centered for balance) */}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow — San Francisco locale, bookends with the credential chips below */}
          <div className="inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream shadow-lg shadow-ink/10 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {site.city}, {site.state} · Accountant & Software Engineer
          </div>

          <h1 className="text-halo mt-6 font-display text-[2.7rem] font-bold leading-[1.18] tracking-tight text-ink sm:text-6xl lg:text-[4.3rem]">
            Modern accounting for{" "}
            <span className="relative whitespace-nowrap text-gold-deep">
              ambitious
              <svg
                className="absolute -bottom-3 left-0 w-full text-gold"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M8 7C60 4 140 4 192 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            businesses
          </h1>

          {/* Tight one-liner — easier to read over video than a full paragraph */}
          <p className="text-halo-soft mt-6 max-w-md font-alt text-lg font-semibold leading-snug text-ink">
            Tax, bookkeeping, and advisory. Modern, paperless, and refreshingly
            stress-free.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.calendlyUrl} external withArrow>
              Book a free consultation
            </Button>
            <Button href="#services" variant="ghost">
              Explore services
            </Button>
          </div>

          {/* Credentials — each a frosted chip so they read on any frame */}
          <ul className="mt-10 flex flex-wrap items-center gap-2.5">
            {site.credentials.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-2 rounded-full bg-paper/85 px-3.5 py-1.5 text-sm font-medium text-ink shadow-sm ring-1 ring-ink/5 backdrop-blur-sm"
              >
                <IconCheck className="h-4 w-4 shrink-0 text-gold-deep" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
