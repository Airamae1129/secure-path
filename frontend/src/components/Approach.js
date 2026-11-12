import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Compass, Sprout, ClipboardCheck, Shield } from "lucide-react";
import { APPROACH } from "../content";
import { EASE, Eyebrow, Reveal } from "./shared";

const ICONS = {
  compass: Compass,
  sprout: Sprout,
  "clipboard-check": ClipboardCheck,
  shield: Shield,
};

export function Approach() {
  const lineRef = useRef(null);
  const inView = useInView(lineRef, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="relative bg-white py-20 lg:py-32" data-testid="approach-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{APPROACH.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-3xl font-heading text-2xl font-normal leading-snug text-navy sm:text-3xl lg:text-4xl">
            {APPROACH.intro}
          </p>
        </Reveal>

        <div ref={lineRef} className="relative mt-16 lg:mt-24">
          {/* connecting path */}
          <div className="absolute left-0 right-0 top-7 hidden h-px lg:block" aria-hidden="true">
            <div className="h-px w-full bg-navy-20" />
            <motion.div
              className="absolute left-0 top-0 h-px bg-teal"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: reduceMotion ? 0 : 2.2, ease: EASE, delay: 0.2 }}
            />
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {APPROACH.pillars.map((pillar, i) => {
              const Icon = ICONS[pillar.icon];
              return (
                <motion.article
                  key={pillar.number}
                  data-testid={`approach-pillar-${pillar.number}`}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.5, ease: EASE }}
                  className="relative"
                >
                  <div className="relative mb-8 flex items-center">
                    <motion.span
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-navy-20 bg-white"
                      animate={inView ? { borderColor: "#0D9488" } : {}}
                      transition={{ duration: 0.5, delay: 0.35 + i * 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-navy" strokeWidth={1.5} />
                    </motion.span>
                    <span className="ml-4 font-heading text-sm font-medium tracking-[0.2em] text-navy-40 lg:hidden">
                      {pillar.number}
                    </span>
                  </div>
                  <span className="mb-3 hidden font-heading text-sm font-medium tracking-[0.2em] text-navy-40 lg:block">
                    {pillar.number}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slateink">{pillar.line}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
