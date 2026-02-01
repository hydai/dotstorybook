import type { Transition } from "motion";

export const transitions = {
  fast: {
    type: "tween",
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
  base: {
    type: "tween",
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
  slow: {
    type: "tween",
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
  dramatic: {
    type: "tween",
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
} as const;

export const hoverLift = {
  whileHover: { y: -4 },
  whileTap: { y: 0 },
  transition: transitions.fast,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.base,
} as const;
