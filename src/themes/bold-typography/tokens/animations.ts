import type { Transition } from "motion";

export const transitions = {
  micro: {
    type: "tween",
    duration: 0.15,
    ease: [0.25, 0, 0, 1],
  } satisfies Transition,
  standard: {
    type: "tween",
    duration: 0.2,
    ease: [0.25, 0, 0, 1],
  } satisfies Transition,
  slow: {
    type: "tween",
    duration: 0.5,
    ease: [0.25, 0, 0, 1],
  } satisfies Transition,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.standard,
} as const;

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;
