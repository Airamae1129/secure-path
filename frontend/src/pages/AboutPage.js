import { Scale, MessageSquare, Infinity as InfinityIcon, ArrowUpRight, BadgeCheck } from "lucide-react";
import { ABOUT, TRUST_ITEMS, FOUNDER, IMAGES } from "../content";
import { Eyebrow, Reveal } from "../components/shared";

const ICONS = {
  scale: Scale,
  "message-square": MessageSquare,
  infinity: InfinityIcon,
};

function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-steel py-16 lg:py-24" data-testid="founder-section">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{FOUNDER.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 font-heading text-3xl font-medium tracking-tight text-navy sm:text-4xl">
            {FOUNDER.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* photo + name card */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-navy-20/70 bg-white p-6 shadow-xl shadow-navy/5">
                <div className="relative mx-auto aspect-square max-w-[300px]">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2 rounded-full border-2 border-dashed border-teal-40"
                  />
                  <img
                    src={FOUNDER.photo}
                    alt={FOUNDER.photoAlt}
                    className="h-full w-full rounded-full object-cover"
                    data-testid="founder-photo"
                  />
                </div>
                <div className="mt-6 rounded-2xl bg-navy px-6 py-5" data-testid="founder-name-card">
                  <p className="font-heading text-2xl font-medium text-white">{FOUNDER.name}</p>
                  <p className="mt-1 text-sm text-teal-light">{FOUNDER.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* bio + credentials */}
          <div>
            {FOUNDER.bio.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className={`leading-relaxed text-slateink ${i === 0 ? "font-heading text-lg font-light text-navy sm:text-xl" : "mt-5"}`}>
                  {para}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2.5" data-testid="founder-credentials">
                {FOUNDER.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-teal"
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

export default function AboutPage({ onBook }) {
  return (
    <div data-testid="about-page">
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-steel pb-16 pt-40 lg:pb-24 lg:pt-48">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-light tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {ABOUT.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="font-heading text-xl font-light leading-relaxed text-navy sm:text-2xl">
                  {ABOUT.intro}
                </p>
              </Reveal>
              {ABOUT.body.map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p className="mt-6 leading-relaxed text-slateink">{para}</p>
                </Reveal>
              ))}
            </div>
            <div className="space-y-px overflow-hidden rounded-2xl border border-navy-20/80">
              {ABOUT.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08} className="bg-steel px-8 py-8">
                  <p className="font-heading text-3xl font-light text-teal">{stat.value}</p>
                  <p className="mt-2 text-sm text-slateink">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* image collage */}
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3" data-testid="about-collage">
            {IMAGES.aboutCollage.map((image, i) => (
              <Reveal key={image.src} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-navy-20/70">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FounderSection />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6">
            {ABOUT.values.map((value, i) => {
              const Icon = ICONS[value.icon];
              return (
                <Reveal
                  key={value.title}
                  delay={i * 0.08}
                  className="group rounded-2xl border border-navy-20/80 bg-white p-8 transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-steel transition-colors duration-500 group-hover:bg-teal-20">
                    <Icon className="h-6 w-6 text-navy transition-colors duration-500 group-hover:text-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-medium text-navy">{value.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slateink">{value.line}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-16 flex flex-wrap items-center justify-center gap-3 border-t border-navy-20/70 pt-10">
            {TRUST_ITEMS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-navy-20 px-5 py-2 text-sm font-medium text-slateink"
              >
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
        <img
          src={IMAGES.dark}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-light tracking-tight text-white sm:text-4xl">
              Ready to start the conversation?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-navy-20">Start with a free 30-minute consultation.</p>
          </Reveal>
          <Reveal delay={0.18}>
            <button
              type="button"
              onClick={onBook}
              data-testid="about-page-book-btn"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-cyber px-8 py-3.5 font-medium text-white transition-all duration-400 ease-brand hover:bg-teal"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
