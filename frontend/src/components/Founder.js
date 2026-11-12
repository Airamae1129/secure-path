import { BadgeCheck } from "lucide-react";
import { FOUNDER } from "../content";
import { Eyebrow, Reveal } from "./shared";

export function Founder({ dark = false }) {
  return (
    <section
      id="founder"
      className={`relative overflow-hidden py-16 lg:py-24 ${dark ? "bg-navy" : "bg-steel"}`}
      data-testid="founder-section"
    >
      {dark ? (
        <div className="noise-dark pointer-events-none absolute inset-0" />
      ) : (
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      )}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow light={dark}>{FOUNDER.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className={`mt-5 font-heading text-3xl font-medium tracking-tight sm:text-4xl ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            {FOUNDER.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          <Reveal delay={0.1}>
            <div
              className={`overflow-hidden rounded-3xl border p-6 ${
                dark
                  ? "border-white/10 bg-navy-mid/40"
                  : "border-navy-20/70 bg-white shadow-xl shadow-navy/5"
              }`}
            >
              <div className="relative mx-auto aspect-square max-w-[300px]">
                <div
                  aria-hidden="true"
                  className={`absolute -inset-2 rounded-full border-2 border-dashed ${
                    dark ? "border-teal-light/50" : "border-teal-40"
                  }`}
                />
                <img
                  src={FOUNDER.photo}
                  alt={FOUNDER.photoAlt}
                  className="h-full w-full rounded-full object-cover"
                  data-testid="founder-photo"
                />
              </div>
              <div
                className={`mt-6 rounded-2xl px-6 py-5 ${
                  dark ? "border border-white/10 bg-white/10" : "bg-navy"
                }`}
                data-testid="founder-name-card"
              >
                <p className="font-heading text-2xl font-medium text-white">{FOUNDER.name}</p>
                <p className="mt-1 text-sm text-teal-light">{FOUNDER.role}</p>
              </div>
            </div>
          </Reveal>

          <div>
            {FOUNDER.bio.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p
                  className={`leading-relaxed ${
                    i === 0
                      ? `font-heading text-lg font-medium sm:text-xl ${dark ? "text-white" : "text-navy"}`
                      : `mt-5 ${dark ? "text-navy-20" : "text-slateink"}`
                  }`}
                >
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2.5" data-testid="founder-credentials">
                {FOUNDER.credentials.map((cred) => (
                  <span
                    key={cred}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-teal ${
                      dark ? "border border-white/15 bg-white/10" : "bg-navy"
                    }`}
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-teal-light" strokeWidth={2} />
                    {cred}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
