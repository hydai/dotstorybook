import type { Meta, StoryObj } from "@storybook/react";
import { ScanlineOverlay } from "./ScanlineOverlay";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/ScanlineOverlay",
  component: ScanlineOverlay,
  decorators: [vaporwaveDecorator],
  argTypes: {
    tint: {
      control: "select",
      options: ["magenta", "neutral"],
    },
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
  },
} satisfies Meta<typeof ScanlineOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Magenta: Story = {
  args: { tint: "magenta", opacity: 1 },
};

export const Neutral: Story = {
  args: { tint: "neutral", opacity: 1 },
};

export const Subtle: Story = {
  args: { tint: "magenta", opacity: 0.3 },
};
