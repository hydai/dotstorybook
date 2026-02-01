import type { Transition } from "motion";

export const transitions = {
  bouncy: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  } satisfies Transition,
  fast: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } satisfies Transition,
  smooth: {
    type: "spring",
    stiffness: 200,
    damping: 25,
  } satisfies Transition,
  slow: {
    type: "spring",
    stiffness: 100,
    damping: 20,
  } satisfies Transition,
} as const;

export const hoverPop = {
  whileHover: { scale: 1.05, rotate: -1.5 },
  whileTap: { scale: 0.97 },
  transition: transitions.bouncy,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
} as const;

export const popIn = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  transition: transitions.bouncy,
} as const;
