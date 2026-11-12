import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { STATEMENT, IMAGES } from "../content";
import { Reveal } from "./shared";

export function StatementBanner() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      data-testid="statement-banner"
    >
      <motion.div
        style={reduceMotion ? {} : { y }}
        className="absolute inset-0 scale-[1.3]"
        aria-hidden="true"
      >
        <img
          src={IMAGES.banner}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-36">
        <Reveal>
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-teal-light">
            <span aria-hidden="true" className="h-px w-8 bg-teal-light/70" />
            Our belief
            <span aria-hidden="true" className="h-px w-8 bg-teal-light/70" />
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-balance mt-7 font-heading text-3xl font-medium leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
            {STATEMENT.quote}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-20 sm:text-lg">
            {STATEMENT.sub}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
