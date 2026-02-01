import type { Meta, StoryObj } from "@storybook/react";
import { GlowBorder } from "./GlowBorder";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/GlowBorder",
  component: GlowBorder,
  decorators: [cryptoDecorator],
  argTypes: {
    color: {
      control: "select",
      options: ["orange", "gold", "gradient"],
    },
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof GlowBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Orange: Story = {
  args: {
    color: "orange",
    children: (
      <div>
        <p className="text-lg font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Orange Glow Border
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 font-[var(--font-body)]">
          Static orange glow surrounding the card content.
        </p>
      </div>
    ),
  },
};

export const Gold: Story = {
  args: {
    color: "gold",
    children: (
      <div>
        <p className="text-lg font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Gold Glow Border
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 font-[var(--font-body)]">
          Static gold glow border variant.
        </p>
      </div>
    ),
  },
};

export const Animated: Story = {
  args: {
    color: "orange",
    animated: true,
    children: (
      <div>
        <p className="text-lg font-semibold text-[var(--color-text-primary)] font-[var(--font-heading)]">
          Animated Glow
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 font-[var(--font-body)]">
          Pulsing glow effect using crypto-border-glow keyframe.
        </p>
      </div>
    ),
  },
};

export const AllColors: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-4">
      <GlowBorder color="orange" className="w-56">
        <p className="text-sm text-[var(--color-accent)]">Orange</p>
      </GlowBorder>
      <GlowBorder color="gold" className="w-56">
        <p className="text-sm text-[var(--color-tertiary)]">Gold</p>
      </GlowBorder>
      <GlowBorder color="gradient" animated className="w-56">
        <p className="text-sm text-[var(--color-text-primary)]">
          Gradient (animated)
        </p>
      </GlowBorder>
    </div>
  ),
};
