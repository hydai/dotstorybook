import type { Meta, StoryObj } from "@storybook/react";
import { KineticHero } from "./KineticHero";
import { kineticDecorator } from "../../storyDecorator";

const meta = {
  title: "Kinetic/Components/KineticHero",
  component: KineticHero,
  decorators: [kineticDecorator],
  argTypes: {
    headline: { control: "text" },
    subline: { control: "text" },
  },
} satisfies Meta<typeof KineticHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: "MOVE FAST",
    subline:
      "Typography is not decoration—it is the entire visual structure. Text becomes image, headline becomes hero, motion becomes rhythm.",
  },
};

export const Short: Story = {
  args: {
    headline: "BOLD",
  },
};

export const Long: Story = {
  args: {
    headline: "KINETIC ENERGY",
    subline:
      "Every element should feel alive through constant motion, reactive motion, or scroll-triggered motion. The page pulses with kinetic energy—nothing is ever truly still.",
  },
};
