import type { Transition } from "motion";

export const transitions = {
  fast: { type: "tween", duration: 0.1, ease: "linear" } as Transition,
  smooth: {
    type: "tween",
    duration: 0.2,
    ease: [0.25, 0, 0.25, 1],
  } as Transition,
  slow: {
    type: "tween",
    duration: 0.4,
    ease: [0.25, 0, 0.25, 1],
  } as Transition,
  digital: { type: "tween", duration: 0.15, ease: "linear" } as Transition,
};

export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: transitions.fast,
};

export const fadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: transitions.smooth,
};
