import type { Transition } from "motion";

export const transitions = {
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
  bouncy: {
    type: "spring",
    stiffness: 300,
    damping: 12,
  } satisfies Transition,
} as const;

export const claySquish = {
  whileHover: { scale: 1.04, y: -4 },
  whileTap: { scale: 0.92 },
  transition: transitions.bouncy,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
} as const;
