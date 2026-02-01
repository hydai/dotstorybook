import type { Transition } from "motion";

export const transitions = {
  smooth: {
    type: "tween",
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,
  slow: {
    type: "tween",
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,
  lift: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } satisfies Transition,
} as const;

export const hoverLift = {
  whileHover: { y: -2 },
  whileTap: { y: 0 },
  transition: transitions.smooth,
} as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.slow,
} as const;
