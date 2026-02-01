import type { Transition } from "motion";

export const transitions = {
  smooth: {
    type: "spring",
    stiffness: 200,
    damping: 25,
    duration: 0.3,
  } satisfies Transition,
  decorative: {
    type: "spring",
    stiffness: 120,
    damping: 18,
    duration: 0.5,
  } satisfies Transition,
} as const;

export const neuExtruded = {
  whileHover: { y: -1 },
  whileTap: { y: 0.5 },
  transition: transitions.smooth,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
} as const;
