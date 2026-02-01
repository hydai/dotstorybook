import type { Transition } from "motion";

export const transitions = {
  instant: {
    type: "tween",
    duration: 0,
  } satisfies Transition,
  snappy: {
    type: "tween",
    duration: 0.05,
  } satisfies Transition,
} as const;

export const retroPress = {
  whileTap: {
    y: 1,
    x: 1,
  },
  transition: transitions.instant,
} as const;
