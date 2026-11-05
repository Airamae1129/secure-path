import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { EASE } from "./shared";

// THE PATH — one continuous teal line that draws itself as the user scrolls,
// travelling up-and-right through the page and ending in an arrowhead at the final CTA.
export function PathLine() {
  const pathRef = useRef(null);
  const arrowRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    mass: 0.6,
  });

  const pathD =
    "M 20 240 C 180 240, 320 220, 460 200 S 780 150, 900 130 S 1180 150, 1300 230 S 1560 420, 1650 540 S 1740 760, 1700 880 S 1520 1040, 1380 1100 S 1080 1180, 940 1250 S 720 1390, 760 1500 S 980 1640, 1150 1680 S 1440 1690, 1560 1640 S 1720 1520, 1740 1410 S 1690 1230, 1570 1170 S 1300 1120, 1160 1180 S 920 1350, 900 1480 S 960 1700, 1080 1790 S 1380 1900, 1520 1940 S 1740 1990, 1830 2070 S 1900 2280, 1850 2400 S 1680 2560, 1520 2610 S 1180 2650, 1020 2710 S 800 2850, 840 2970 S 1080 3110, 1260 3150 S 1580 3160, 1700 3110 S 1880 2980, 1900 2850 S 1860 2660, 1750 2600 S 1490 2540, 1350 2610 S 1120 2790, 1110 2920 S 1190 3120, 1330 3200 S 1630 3300, 1780 3330 S 1980 3370, 2070 3450 S 2140 3640, 2090 3760 S 1920 3920, 1750 3970 S 1420 4010, 1270 4070 S 1060 4210, 1100 4330 S 1340 4470, 1520 4510 S 1850 4520, 1990 4470 S 2180 4340, 2200 4200 S 2160 4000, 2040 3940 S 1760 3880, 1620 3960 S 1410 4150, 1430 4290 S 1560 4480, 1720 4550 S 2030 4620, 2180 4640 S 2420 4650, 2520 4710 S 2620 4870, 2580 4990 S 2430 5140, 2280 5180 S 2000 5220, 1860 5270 S 1650 5400, 1680 5520 S 1900 5660, 2080 5700 S 2400 5710, 2540 5660 S 2760 5520, 2790 5370 S 2730 5160, 2600 5090 S 2300 5010, 2140 5090 S 1880 5290, 1880 5440 S 1990 5640, 2150 5700 S 2480 5770, 2650 5790 S 2940 5800, 3060 5850 S 3180 5980, 3150 6100";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
      style={{ zIndex: 1 }}
    >
      <svg
        className="absolute left-1/2 top-0 h-full -translate-x-1/2"
        width="1440"
        viewBox="0 0 1440 6200"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
      >
        {reduceMotion ? (
          <path
            d={pathD}
            stroke="#99DFD9"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform="scale(0.4444 1)"
          />
        ) : (
          <>
            <motion.path
              ref={pathRef}
              d={pathD}
              stroke="#0D9488"
              strokeOpacity="0.55"
              strokeWidth="1.5"
              strokeLinecap="round"
              transform="scale(0.4444 1)"
              style={{ pathLength: progress }}
            />
            {/* ghost of the path ahead */}
            <path
              d={pathD}
              stroke="#99DFD9"
              strokeOpacity="0.14"
              strokeWidth="1.5"
              strokeLinecap="round"
              transform="scale(0.4444 1)"
            />
          </>
        )}
      </svg>
    </div>
  );
}

// Small decorative arrow that draws in — used at the final CTA
export function PathArrowhead({ className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M6 84 C 40 70, 76 48, 104 16"
        stroke="#14B8A6"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: reduceMotion ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
      />
      <motion.path
        d="M84 14 L 106 12 L 104 34"
        stroke="#14B8A6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: EASE, delay: 1 }}
      />
    </svg>
  );
}
