import { create } from "@storybook/theming";

export default create({
  base: "dark",
  brandTitle: "Design Systems",
  brandUrl: "/",

  // UI
  appBg: "#0a0a0b",
  appContentBg: "#0f0f11",
  appBorderColor: "rgba(255,255,255,0.08)",
  appBorderRadius: 8,

  // Text
  textColor: "#e4e4e7",
  textMutedColor: "#71717a",
  textInverseColor: "#09090b",

  // Toolbar
  barBg: "#0f0f11",
  barTextColor: "#a1a1aa",
  barSelectedColor: "#e4e4e7",
  barHoverColor: "#e4e4e7",

  // Form
  inputBg: "#18181b",
  inputBorder: "rgba(255,255,255,0.08)",
  inputTextColor: "#e4e4e7",
  inputBorderRadius: 6,

  // Colors
  colorPrimary: "#6366f1",
  colorSecondary: "#6366f1",
});
