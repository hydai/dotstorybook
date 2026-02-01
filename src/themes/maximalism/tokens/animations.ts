import type { Transition } from "motion";

export const transitions = {
  bouncy: {
    type: "spring",
    stiffness: 260,
    damping: 12,
  } satisfies Transition,
  bouncyFast: {
    type: "spring",
    stiffness: 400,
    damping: 15,
  } satisfies Transition,
  smooth: {
    type: "tween",
    ease: [0.68, -0.55, 0.265, 1.55],
    duration: 0.4,
  } satisfies Transition,
  slow: {
    type: "spring",
    stiffness: 100,
    damping: 20,
  } satisfies Transition,
} as const;

export const hoverPop = {
  whileHover: { scale: 1.08, rotate: -2 },
  whileTap: { scale: 0.95 },
  transition: transitions.bouncy,
} as const;

export const hoverBounce = {
  whileHover: { y: -4, scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: transitions.bouncy,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.bouncy,
} as const;

export const popIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: transitions.bouncy,
} as const;
