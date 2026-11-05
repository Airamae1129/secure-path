import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { PROCESS } from "../content";
import { Eyebrow, Reveal } from "./shared";

export function Process() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = Math.min(
        PROCESS.steps.length - 1,
        Math.max(0, Math.round(v * (PROCESS.steps.length - 1)))
      );
      setActive(idx);
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <section id="process" ref={sectionRef} className="relative bg-white" data-testid="process-section">
      <div className="lg:h-[320vh]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{PROCESS.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-heading text-3xl font-medium tracking-tight text-navy sm:text-4xl lg:text-5xl">
                {PROCESS.title}
              </h2>
            </Reveal>
          </div>

          {/* desktop: horizontal sticky timeline */}
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              <div className="h-px w-full bg-navy-20" />
              <motion.div
                className="absolute left-0 top-0 h-[2px] origin-left bg-teal"
                style={{ scaleX: reduceMotion ? 1 : progress, width: "100%" }}
              />
              <div className="grid grid-cols-5 gap-6">
                {PROCESS.steps.map((step, i) => {
                  const isActive = i === active;
                  const isPast = i < active;
                  return (
                    <div key={step.number} className="relative pt-10" data-testid={`process-step-${step.number}`}>
                      <span
                        aria-hidden="true"
                        className={`absolute -top-[7px] left-0 h-3.5 w-3.5 rounded-full border-2 transition-all duration-500 ease-brand ${
                          isActive
                            ? "scale-125 border-teal bg-teal"
                            : isPast
                              ? "border-teal bg-teal"
                              : "border-navy-20 bg-white"
                        }`}
                      />
                      <span
                        className={`font-heading text-sm font-medium tracking-[0.2em] transition-colors duration-500 ${
                          isActive ? "text-teal" : "text-navy-40"
                        }`}
                      >
                        {step.number}
                      </span>
                      <h3
                        className={`mt-3 font-heading text-xl font-medium transition-colors duration-500 ${
                          isActive ? "text-teal" : "text-navy"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`mt-2 text-sm leading-relaxed transition-all duration-500 ${
                          isActive ? "text-slateink opacity-100" : "text-slateink opacity-50"
                        }`}
                      >
                        {step.line}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* mobile: vertical timeline */}
          <div className="mt-14 lg:hidden">
            <div className="relative border-l border-navy-20 pl-8">
              {PROCESS.steps.map((step) => (
                <Reveal key={step.number} className="relative pb-10 last:pb-0" y={16}>
                  <span
                    aria-hidden="true"
                    className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-teal bg-white"
                  />
                  <span className="font-heading text-sm font-medium tracking-[0.2em] text-teal">
                    {step.number}
                  </span>
                  <h3 className="mt-1.5 font-heading text-xl font-medium text-navy">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slateink">{step.line}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
