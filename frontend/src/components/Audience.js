import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { AUDIENCE } from "../content";
import { EASE, Eyebrow, Reveal } from "./shared";

export function Audience({ onBook }) {
  const [openId, setOpenId] = useState(AUDIENCE.groups[0].id);
  const reduceMotion = useReducedMotion();

  return (
    <section id="audience" className="relative bg-white py-20 lg:py-32" data-testid="audience-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{AUDIENCE.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-heading text-3xl font-medium tracking-tight text-navy sm:text-4xl">
                {AUDIENCE.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slateink">{AUDIENCE.body}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <button
                type="button"
                onClick={onBook}
                data-testid="audience-work-with-us-btn"
                className="group mt-8 inline-flex items-center gap-2 font-medium text-cyber transition-colors hover:text-navy"
              >
                {AUDIENCE.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-400 ease-brand group-hover:translate-x-1.5" strokeWidth={1.8} />
              </button>
            </Reveal>
          </div>

          <div>
            {AUDIENCE.groups.map((group, i) => {
              const isOpen = openId === group.id;
              return (
                <Reveal key={group.id} delay={i * 0.05} y={16}>
                  <div className="border-b border-navy-20/80 first:border-t">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : group.id)}
                      aria-expanded={isOpen}
                      data-testid={`audience-row-${group.id}`}
                      className="group flex w-full items-center justify-between gap-4 py-6 text-left"
                    >
                      <span
                        className={`font-heading text-lg font-medium transition-colors duration-400 sm:text-xl ${
                          isOpen ? "text-teal" : "text-navy group-hover:text-teal"
                        }`}
                      >
                        {group.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-400 ${
                          isOpen ? "border-teal bg-teal text-white" : "border-navy-20 text-navy group-hover:border-teal group-hover:text-teal"
                        }`}
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.8} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-7 text-[15px] leading-relaxed text-slateink">
                            {group.line}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
