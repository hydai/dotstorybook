import type { Transition } from "motion";

export const transitions = {
  fast: {
    type: "tween",
    duration: 0.1,
    ease: "linear",
  } satisfies Transition,
  smooth: {
    type: "tween",
    duration: 0.2,
    ease: "linear",
  } satisfies Transition,
  slow: {
    type: "tween",
    duration: 0.4,
    ease: [0.25, 0, 0.25, 1],
  } satisfies Transition,
  mechanical: {
    type: "tween",
    duration: 0.15,
    ease: "linear",
  } satisfies Transition,
} as const;

export const hoverScale = {
  whileHover: { scale: 1.01 },
  whileTap: { scale: 0.99 },
  transition: transitions.fast,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 4 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
} as const;
