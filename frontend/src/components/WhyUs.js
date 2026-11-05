import { motion, useReducedMotion } from "framer-motion";
import { Recycle, Target, Wrench, Handshake } from "lucide-react";
import { WHY_US } from "../content";
import { EASE, Eyebrow, Reveal } from "./shared";

const ICONS = {
  recycle: Recycle,
  target: Target,
  wrench: Wrench,
  handshake: Handshake,
};

export function WhyUs() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy py-20 lg:py-32" data-testid="why-us-section">
      <div className="noise-dark pointer-events-none absolute inset-0" />
      {/* faint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow light>{WHY_US.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-heading text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
              {WHY_US.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {WHY_US.items.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.article
                key={item.title}
                data-testid={`why-us-item-${i + 1}`}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                className="group bg-navy p-8 transition-colors duration-500 hover:bg-navy-mid lg:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal/30 bg-teal/10 transition-colors duration-500 group-hover:bg-teal/20">
                  <Icon className="h-6 w-6 text-teal-light" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-20">{item.line}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
