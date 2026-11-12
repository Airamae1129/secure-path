import { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FINAL_CTA } from "../content";
import { EASE, Reveal } from "./shared";
import { PathArrowhead } from "./PathLine";

function MagneticButton({ onBook }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const onMove = useCallback(
    (e) => {
      if (reduceMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      if (dist < 160) {
        const pull = Math.min(6, (1 - dist / 160) * 10);
        setOffset({ x: (dx / dist) * pull, y: (dy / dist) * pull });
      }
    },
    [reduceMotion]
  );

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onBook}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      data-testid="final-cta-book-btn"
      className="animate-glow-pulse group inline-flex items-center gap-3 rounded-full bg-cyber px-9 py-4 font-heading text-lg font-medium text-white transition-colors duration-400 ease-brand hover:bg-teal"
    >
      {FINAL_CTA.button}
      <ArrowUpRight className="h-5 w-5 transition-transform duration-400 ease-brand group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.8} />
    </motion.button>
  );
}

export function FinalCTA({ onBook }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-steel to-white py-24 lg:py-32"
      data-testid="final-cta-section"
    >
      <PathArrowhead className="mx-auto h-16 w-24 opacity-90 lg:h-20 lg:w-28" />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance pt-8 font-heading text-4xl font-medium tracking-tight text-navy sm:text-5xl lg:pt-10 lg:text-6xl">
            {FINAL_CTA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-lg text-slateink">{FINAL_CTA.sub}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <MagneticButton onBook={onBook} />
          </div>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-8 text-sm text-navy-40">
            No obligation. No jargon. Just a clear view of your next step.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
