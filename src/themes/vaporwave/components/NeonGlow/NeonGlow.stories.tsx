import type { Meta, StoryObj } from "@storybook/react";
import { NeonGlow } from "./NeonGlow";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/NeonGlow",
  component: NeonGlow,
  decorators: [vaporwaveDecorator],
  argTypes: {
    color: {
      control: "select",
      options: ["magenta", "cyan", "orange", "sunset"],
    },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof NeonGlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Magenta: Story = {
  args: {
    color: "magenta",
    children: (
      <div className="p-6">
        <span className="text-sm text-[var(--color-accent)] uppercase tracking-widest font-[var(--font-label)]">
          Magenta Glow
        </span>
      </div>
    ),
  },
};

export const Cyan: Story = {
  args: {
    color: "cyan",
    children: (
      <div className="p-6">
        <span className="text-sm text-[var(--color-secondary)] uppercase tracking-widest font-[var(--font-label)]">
          Cyan Glow
        </span>
      </div>
    ),
  },
};

export const Orange: Story = {
  args: {
    color: "orange",
    children: (
      <div className="p-6">
        <span className="text-sm text-[var(--color-tertiary)] uppercase tracking-widest font-[var(--font-label)]">
          Orange Glow
        </span>
      </div>
    ),
  },
};

export const Sunset: Story = {
  args: {
    color: "sunset",
    children: (
      <div className="p-6">
        <span className="text-sm text-[var(--color-text-primary)] uppercase tracking-widest font-[var(--font-label)]">
          Sunset Gradient
        </span>
      </div>
    ),
  },
};

export const AllColors: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-6">
      <NeonGlow color="magenta">
        <div className="p-6 text-center">
          <span className="text-sm text-[var(--color-accent)] uppercase tracking-widest font-[var(--font-label)]">
            Magenta
          </span>
        </div>
      </NeonGlow>
      <NeonGlow color="cyan">
        <div className="p-6 text-center">
          <span className="text-sm text-[var(--color-secondary)] uppercase tracking-widest font-[var(--font-label)]">
            Cyan
          </span>
        </div>
      </NeonGlow>
      <NeonGlow color="orange">
        <div className="p-6 text-center">
          <span className="text-sm text-[var(--color-tertiary)] uppercase tracking-widest font-[var(--font-label)]">
            Orange
          </span>
        </div>
      </NeonGlow>
      <NeonGlow color="sunset">
        <div className="p-6 text-center">
          <span className="text-sm text-[var(--color-text-primary)] uppercase tracking-widest font-[var(--font-label)]">
            Sunset
          </span>
        </div>
      </NeonGlow>
    </div>
  ),
};
