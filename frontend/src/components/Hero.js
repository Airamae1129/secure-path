import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "../content";
import { EASE, useMouseParallax, scrollToTarget } from "./shared";

function ShieldGraphic() {
  const reduceMotion = useReducedMotion();
  const draw = (delay, duration) =>
    reduceMotion
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration, delay, ease: EASE },
        };
  return (
    <svg viewBox="0 0 320 360" fill="none" className="h-auto w-full max-w-[420px]" aria-hidden="true">
      {/* shield outline */}
      <motion.path
        d="M160 18c34 23 71 34 118 39 0 103-34.7 183-118 236C76.7 240 42 160 42 57 89 52 126 41 160 18Z"
        stroke="#0B2545"
        strokeWidth="2"
        strokeLinejoin="round"
        {...draw(0.3, 1.6)}
      />
      {/* inner hairline echo */}
      <motion.path
        d="M160 44c27 18 56 27 93 31 0 81-27.3 144-93 186C94.3 219 67 156 67 75c37-4 66-13 93-31Z"
        stroke="#A1B1C8"
        strokeWidth="1"
        strokeLinejoin="round"
        {...draw(0.7, 1.4)}
      />
      {/* teal path line through the shield */}
      <motion.path
        d="M88 268 C 128 232, 176 176, 236 96"
        stroke="#0D9488"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={reduceMotion ? {} : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={
          reduceMotion
            ? {}
            : { type: "spring", stiffness: 42, damping: 14, delay: 1.9 }
        }
      />
      {/* arrowhead */}
      <motion.path
        d="M200 90 L 240 84 L 234 124"
        stroke="#0D9488"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? {} : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={reduceMotion ? {} : { duration: 0.45, delay: 2.55, ease: EASE }}
      />
      {/* destination dot */}
      <motion.circle
        cx="236"
        cy="96"
        r="5"
        fill="#0D9488"
        initial={reduceMotion ? {} : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={reduceMotion ? {} : { duration: 0.4, delay: 2.5, ease: EASE }}
      />
    </svg>
  );
}

export function Hero({ onBook }) {
  const reduceMotion = useReducedMotion();
  const parallaxRef = useMouseParallax(8);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-steel pt-[72px]"
      data-testid="hero-section"
    >
      {/* drifting dotted grid */}
      <div ref={parallaxRef} className="pointer-events-none absolute inset-0 will-change-transform">
        <div className="dot-grid absolute -inset-10" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pb-36 lg:pt-24">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-teal"
            data-testid="hero-eyebrow"
          >
            <span aria-hidden="true" className="h-px w-10 bg-teal" />
            {HERO.eyebrow}
          </motion.p>

          <h1 className="max-w-2xl font-heading text-4xl font-light leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {HERO.titleWords.map((word, i) => {
              const isPath = word === HERO.highlightWord;
              return (
                <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={reduceMotion ? { opacity: 0 } : { y: "110%" }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: EASE }}
                  >
                    {isPath ? (
                      <span className="relative inline-block font-medium text-teal">
                        {word}
                        <motion.svg
                          viewBox="0 0 120 12"
                          className="absolute -bottom-1 left-0 h-[10px] w-full"
                          fill="none"
                          aria-hidden="true"
                        >
                          <motion.path
                            d="M3 9 C 40 3, 80 3, 117 7"
                            stroke="#0D9488"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={reduceMotion ? {} : { pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 + i * 0.06 + 0.45, ease: EASE }}
                          />
                        </motion.svg>
                      </span>
                    ) : (
                      word
                    )}
                    {i < HERO.titleWords.length - 1 ? " " : ""}
                  </motion.span>
                </span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slateink sm:text-lg"
            data-testid="hero-sub"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-7"
          >
            <button
              type="button"
              onClick={onBook}
              data-testid="hero-book-consultation-btn"
              className="inline-flex items-center gap-2 rounded-full bg-cyber px-7 py-3.5 font-medium text-white transition-all duration-400 ease-brand hover:bg-navy hover:shadow-xl hover:shadow-navy/20"
            >
              {HERO.primaryCta}
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget("#services");
              }}
              data-testid="hero-explore-services-link"
              className="group inline-flex items-center gap-2 font-medium text-cyber transition-colors hover:text-navy"
            >
              {HERO.secondaryCta}
              <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-brand group-hover:translate-x-1.5" strokeWidth={1.8} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="relative z-10 mx-auto w-full max-w-md lg:max-w-none"
        >
          <ShieldGraphic />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="relative z-10 mt-4 hidden justify-center lg:flex"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-navy-40">Scroll</span>
          <div className="relative h-12 w-px overflow-hidden bg-navy-20">
            <div className="animate-scroll-dot absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-teal" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
