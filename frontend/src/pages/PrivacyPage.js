import { PRIVACY, BRAND } from "../content";
import { Eyebrow, Reveal } from "../components/shared";

export default function PrivacyPage() {
  return (
    <div data-testid="privacy-page">
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-steel pb-16 pt-40 lg:pb-20 lg:pt-48">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>{PRIVACY.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-light tracking-tight text-navy sm:text-5xl">
              {PRIVACY.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-navy-40">
              {PRIVACY.updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="font-heading text-xl font-light leading-relaxed text-navy">
              {PRIVACY.intro}
            </p>
          </Reveal>
          <div className="mt-12 space-y-0">
            {PRIVACY.sections.map((section, i) => (
              <Reveal key={section.title} delay={0.03 * i} className="border-t border-navy-20/70 py-8 first:border-t-0 first:pt-0">
                <h2 className="font-heading text-xl font-medium text-navy">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-slateink">{section.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 rounded-2xl bg-steel p-8">
            <p className="text-[15px] leading-relaxed text-slateink">
              Questions about this policy or your data? Email us at{" "}
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="privacy-email-link"
                className="font-medium text-cyber underline decoration-teal/40 underline-offset-4 transition-colors hover:text-navy"
              >
                {BRAND.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
