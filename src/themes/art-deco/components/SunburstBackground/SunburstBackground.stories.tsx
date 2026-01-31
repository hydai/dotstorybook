import type { Meta, StoryObj } from "@storybook/react";
import { SunburstBackground } from "./SunburstBackground";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/SunburstBackground",
  component: SunburstBackground,
  decorators: [artDecoDecorator],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    showSunburst: { control: "boolean" },
    showCrosshatch: { control: "boolean" },
    intensity: {
      control: "select",
      options: ["subtle", "medium", "dramatic"],
    },
  },
} satisfies Meta<typeof SunburstBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showSunburst: true,
    showCrosshatch: true,
    intensity: "subtle",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p
          className="text-3xl font-normal text-[var(--color-text-primary)] uppercase tracking-[0.3em] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
          }}
        >
          THE GRAND STAGE
        </p>
      </div>
    ),
  },
};

export const SunburstOnly: Story = {
  args: {
    showSunburst: true,
    showCrosshatch: false,
    intensity: "medium",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-normal text-[var(--color-text-primary)] uppercase tracking-[0.2em] font-[var(--font-heading)]">
          SUNBURST ONLY
        </p>
      </div>
    ),
  },
};

export const Dramatic: Story = {
  args: {
    showSunburst: true,
    showCrosshatch: true,
    intensity: "dramatic",
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p
          className="text-4xl font-normal text-[var(--color-accent)] uppercase tracking-[0.3em] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)",
          }}
        >
          DRAMATIC
        </p>
      </div>
    ),
  },
};

export const NoEffects: Story = {
  args: {
    showSunburst: false,
    showCrosshatch: false,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-normal text-[var(--color-text-primary)] uppercase tracking-[0.2em] font-[var(--font-heading)]">
          CLEAN BACKDROP
        </p>
      </div>
    ),
  },
};
