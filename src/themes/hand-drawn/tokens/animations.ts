import type { Transition } from "motion";

export const transitions = {
  snappy: {
    type: "tween",
    duration: 0.1,
    ease: [0.25, 1, 0.5, 1],
  } satisfies Transition,
  fast: {
    type: "tween",
    duration: 0.15,
    ease: [0.25, 1, 0.5, 1],
  } satisfies Transition,
  base: {
    type: "tween",
    duration: 0.2,
    ease: [0.25, 1, 0.5, 1],
  } satisfies Transition,
} as const;

export const hoverJiggle = {
  whileHover: { rotate: -1.5, y: -4 },
  whileTap: { rotate: 0, y: 0 },
  transition: transitions.snappy,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.base,
} as const;
