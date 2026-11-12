import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO, IMAGES } from "../content";
import { EASE, useMouseParallax, scrollToTarget } from "./shared";

// Hero shield traced from the official SecurePath mark (public/assets/shield-icon.png):
// thick navy border, gently peaked top, straight sides curving to a point, and the
// bold teal arrow entering from under the lower-left border. Coordinates use the
// mark's own 678x805 pixel space so proportions match the logo exactly.
// Path starts mid-way up the left side so the draw-on animation's seam sits on a
// straight edge instead of leaving a notch at the peak.
const SHIELD_PATH =
  "M32 216 L32 92 L339 32 L646 92 L646 340 C646 540 520 680 339 770 C158 680 32 540 32 340 Z";

function ShieldGraphic() {
  const reduceMotion = useReducedMotion();
  return (
    <svg
      viewBox="0 0 678 805"
      fill="none"
      className="h-auto w-full max-w-[400px]"
      aria-hidden="true"
      data-testid="hero-shield-graphic"
    >
      <defs>
        <clipPath id="sp-shield-clip">
          <path d={SHIELD_PATH} />
        </clipPath>
      </defs>
      {/* white shield body */}
      <path d={SHIELD_PATH} fill="#FFFFFF" />
      {/* bold teal arrow, clipped to the shield so it tucks under the border */}
      <g clipPath="url(#sp-shield-clip)">
        <motion.polygon
          points="70,640 325,327 248,272 500,188 462,460 398,388 140,708"
          fill="#1AACA6"
          strokeLinejoin="round"
          style={{ transformOrigin: "120px 660px" }}
          initial={reduceMotion ? false : { scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 60, damping: 15, delay: 1.5 }}
        />
      </g>
      {/* thick navy border, drawn on load */}
      <motion.path
        d={SHIELD_PATH}
        stroke="#1B3855"
        strokeWidth="60"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.6, delay: 0.3, ease: EASE }}
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

          <h1 className="max-w-2xl font-heading text-4xl font-medium leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {HERO.titleWords.map((word, i) => {
              const isPath = word === HERO.highlightWord;
              return (
                <span
                  key={i}
                  className="inline-block overflow-hidden pb-1 align-bottom"
                  style={{ marginRight: i < HERO.titleWords.length - 1 ? "0.24em" : 0 }}
                >
                  <motion.span
                    className="inline-block"
                    initial={reduceMotion ? { opacity: 0 } : { y: "110%" }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: EASE }}
                  >
                    {isPath ? (
                      <span className="relative inline-block font-semibold text-teal">
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

          {/* floating photo card */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3, ease: EASE }}
            className="absolute -bottom-8 -left-2 z-20 w-36 sm:-left-8 sm:w-52"
          >
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-navy/25"
            >
              <img
                src={IMAGES.heroCard}
                alt="Security consultant at a modern workstation"
                className="h-24 w-full object-cover sm:h-32"
                loading="lazy"
              />
              <div className="flex items-center gap-2 px-3 py-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal" />
                <span className="text-[11px] font-medium tracking-wide text-navy">
                  16+ years of expertise
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6, ease: EASE }}
            className="absolute -right-1 top-4 z-20 sm:right-2"
          >
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 7, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="rounded-full border border-teal-40 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy shadow-lg shadow-navy/10 backdrop-blur"
            >
              ISO 27001 Specialists
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

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
