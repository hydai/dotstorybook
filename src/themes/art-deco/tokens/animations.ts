import type { Transition } from "motion";

export const transitions = {
  fast: {
    type: "tween",
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
  smooth: {
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
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  } satisfies Transition,
} as const;

export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: transitions.fast,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
} as const;
