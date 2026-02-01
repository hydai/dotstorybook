import type { Transition } from "motion";

export const transitions = {
  mechanical: {
    type: "tween",
    duration: 0.15,
    ease: [0.175, 0.885, 0.32, 1.275],
  } satisfies Transition,
  smooth: {
    type: "tween",
    duration: 0.3,
    ease: [0.175, 0.885, 0.32, 1.275],
  } satisfies Transition,
  slow: {
    type: "tween",
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,
} as const;

export const mechanicalPress = {
  whileHover: { y: -1 },
  whileTap: { y: 2 },
  transition: transitions.mechanical,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.slow,
} as const;
