import { site } from "@/config/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { IconCheck } from "./icons";

export default function About() {
  const { aboutPhoto, aboutVideo, aboutVideoPoster } = site.media;

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden border-y border-hair bg-paper-2/40">
      <div className="grid-light absolute inset-0 -z-0 opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        {/* Portrait / video */}
        <Reveal>
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold/25 blur-2xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-hair bg-paper-2 shadow-lg shadow-ink/5">
              {aboutPhoto ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={aboutPhoto}
                  alt={site.cpaName}
                  className="h-full w-full object-cover object-center"
                />
              ) : aboutVideo ? (
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  {...(aboutVideoPoster ? { poster: aboutVideoPoster } : {})}
                >
                  <source src={aboutVideo} type="video/mp4" />
                </video>
              ) : (
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-paper-2 to-hair text-center text-stone">
                  <div>
                    <span className="font-display text-6xl font-bold text-ink/80">
                      {site.firmNameShort.charAt(0)}
                    </span>
                    <p className="mt-3 px-6 text-xs uppercase tracking-widest">
                      Add headshot or clip here
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* Credential badge */}
            <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-hair bg-card p-4 shadow-xl shadow-ink/10">
              <p className="text-center font-display text-sm font-semibold text-ink">
                {site.cpaName}
              </p>
              <p className="mt-0.5 text-center text-xs text-stone">{site.licensure}</p>
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <div>
          <SectionHeading eyebrow="About" title={site.about.heading} />
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-stone">
            {site.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {site.about.credentials.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-sm text-stone">
                <IconCheck className="h-4 w-4 shrink-0 text-gold-deep" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.calendlyUrl} external withArrow>
              Schedule an intro call
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost">
              Email us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
