import type { Transition } from "motion";

export const transitions = {
  fast: {
    type: "tween",
    duration: 0.2,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
  base: {
    type: "tween",
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
  slow: {
    type: "tween",
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
} as const;

export const hoverLift = {
  whileHover: { y: -2 },
  whileTap: { y: 0 },
  transition: transitions.fast,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.base,
} as const;
