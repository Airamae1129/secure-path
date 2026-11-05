import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  SearchCheck,
  FileSearch,
  ScrollText,
  Crown,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "../content";
import { EASE, Eyebrow, Reveal } from "../components/shared";

const ICONS = {
  "badge-check": BadgeCheck,
  "search-check": SearchCheck,
  "file-search": FileSearch,
  "scroll-text": ScrollText,
  crown: Crown,
};

export default function ServicesPage({ onBook }) {
  const reduceMotion = useReducedMotion();
  return (
    <div data-testid="services-page">
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-steel pb-16 pt-40 lg:pb-24 lg:pt-48">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>{SERVICES.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-light tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {SERVICES.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slateink sm:text-lg">
              {SERVICES.sub}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-6 px-5 sm:px-8">
          {SERVICES.items.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.article
                key={service.id}
                data-testid={`services-page-card-${service.id}`}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl border border-navy-20/80 bg-white p-8 transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 lg:p-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[3px] w-0 bg-teal transition-all duration-700 ease-brand group-hover:w-full"
                />
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1.1fr_1fr] lg:gap-12">
                  <div className="flex items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-steel transition-colors duration-500 group-hover:bg-teal-20">
                      <Icon className="h-8 w-8 text-navy transition-colors duration-500 group-hover:text-teal" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-medium text-navy">{service.title}</h2>
                    <p className="mt-4 leading-relaxed text-slateink">{service.detail}</p>
                  </div>
                  <ul className="space-y-3">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] text-slateink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" strokeWidth={2} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-steel py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-light tracking-tight text-navy sm:text-4xl">
              Not sure which service fits?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-slateink">
              Start with a free 30-minute consultation and we'll point you in the right direction.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <button
              type="button"
              onClick={onBook}
              data-testid="services-page-book-btn"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-cyber px-8 py-3.5 font-medium text-white transition-all duration-400 ease-brand hover:bg-navy hover:shadow-xl hover:shadow-navy/20"
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
