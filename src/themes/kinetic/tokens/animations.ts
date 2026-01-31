import type { Transition } from "motion";

export const transitions = {
  fast: {
    type: "tween",
    duration: 0.2,
    ease: [0.25, 0, 0.25, 1],
  } satisfies Transition,
  smooth: {
    type: "tween",
    duration: 0.3,
    ease: [0.25, 0, 0.25, 1],
  } satisfies Transition,
  slow: {
    type: "tween",
    duration: 0.5,
    ease: [0.25, 0, 0.25, 1],
  } satisfies Transition,
  snap: {
    type: "tween",
    duration: 0.15,
    ease: "easeInOut",
  } satisfies Transition,
} as const;

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: transitions.fast,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
} as const;
