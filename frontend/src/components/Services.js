import { Link } from "react-router-dom";
import {
  BadgeCheck,
  SearchCheck,
  FileSearch,
  ScrollText,
  Crown,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "../content";
import { Eyebrow, Reveal } from "./shared";

const ICONS = {
  "badge-check": BadgeCheck,
  "search-check": SearchCheck,
  "file-search": FileSearch,
  "scroll-text": ScrollText,
  crown: Crown,
};

function ServiceCard({ service, delay }) {
  const Icon = ICONS[service.icon];
  return (
    <Reveal
      delay={delay}
      className={service.large ? "lg:col-span-3 lg:row-span-2" : "lg:col-span-2"}
    >
      <Link
        to="/services"
        data-testid={`service-card-${service.id}`}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-20/80 bg-white p-8 transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 ${
          service.large ? "lg:p-12" : ""
        }`}
      >
        {/* teal top border grows left to right */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] w-0 bg-teal transition-all duration-700 ease-brand group-hover:w-full"
        />
        <div
          className={`flex items-center justify-center rounded-xl bg-steel transition-colors duration-500 group-hover:bg-teal-20 ${
            service.large ? "h-16 w-16" : "h-12 w-12"
          }`}
        >
          <Icon
            className={`text-navy transition-all duration-500 ease-brand group-hover:rotate-[-8deg] group-hover:text-teal ${
              service.large ? "h-8 w-8" : "h-6 w-6"
            }`}
            strokeWidth={1.5}
          />
        </div>
        <h3
          className={`mt-6 font-heading font-medium text-navy ${
            service.large ? "text-2xl lg:text-3xl" : "text-lg"
          }`}
        >
          {service.title}
        </h3>
        <p className={`mt-3 leading-relaxed text-slateink ${service.large ? "max-w-lg text-base lg:text-lg" : "text-[15px]"}`}>
          {service.line}
        </p>
        {service.large && (
          <ul className="mt-6 grid max-w-lg grid-cols-1 gap-2.5 sm:grid-cols-2">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-slateink">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                {b}
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-cyber">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-brand group-hover:translate-x-1.5" strokeWidth={1.8} />
        </span>
      </Link>
    </Reveal>
  );
}

export function Services() {
  const large = SERVICES.items.find((s) => s.large);
  const small = SERVICES.items.filter((s) => !s.large);
  return (
    <section id="services" className="relative bg-steel py-20 lg:py-32" data-testid="services-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{SERVICES.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-heading text-3xl font-medium tracking-tight text-navy sm:text-4xl lg:text-5xl">
              {SERVICES.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 text-base leading-relaxed text-slateink sm:text-lg">{SERVICES.sub}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <ServiceCard service={large} delay={0} />
          {small.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={0.08 * (i + 1)} />
          ))}
        </div>
      </div>
    </section>
  );
}
