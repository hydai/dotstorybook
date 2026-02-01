import type { Transition } from "motion";

export const transitions = {
  fast: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } satisfies Transition,
  base: {
    type: "spring",
    stiffness: 300,
    damping: 25,
  } satisfies Transition,
  slow: {
    type: "spring",
    stiffness: 200,
    damping: 20,
  } satisfies Transition,
  gentle: {
    type: "spring",
    stiffness: 120,
    damping: 14,
  } satisfies Transition,
} as const;

export const organicHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: transitions.fast,
} as const;

export const cardHover = {
  whileHover: { y: -4 },
  whileTap: { y: 0 },
  transition: transitions.slow,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.base,
} as const;
