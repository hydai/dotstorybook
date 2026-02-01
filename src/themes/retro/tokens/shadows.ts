export const shadows = {
  outset:
    "inset -1px -1px 0 #404040, inset 1px 1px 0 #dfdfdf",
  inset:
    "inset 1px 1px 0 #404040, inset -1px -1px 0 #dfdfdf",
  outsetDeep:
    "inset -2px -2px 0 #404040, inset 2px 2px 0 #ffffff, inset -1px -1px 0 #808080, inset 1px 1px 0 #dfdfdf",
  insetDeep:
    "inset 2px 2px 0 #404040, inset -2px -2px 0 #ffffff, inset 1px 1px 0 #808080, inset -1px -1px 0 #dfdfdf",
} as const;

export const borderColors = {
  outset: "#fff #808080 #808080 #fff",
  inset: "#808080 #fff #fff #808080",
  outsetDeep: "#fff #404040 #404040 #fff",
} as const;
