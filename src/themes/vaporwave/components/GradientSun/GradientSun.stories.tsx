import type { Meta, StoryObj } from "@storybook/react";
import { GradientSun } from "./GradientSun";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/GradientSun",
  component: GradientSun,
  decorators: [vaporwaveDecorator],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof GradientSun>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: { size: "lg" },
};

export const Medium: Story = {
  args: { size: "md" },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const WithScene: Story = {
  args: { size: "lg" },
  render: () => (
    <div className="relative w-full h-[400px] overflow-hidden bg-[var(--color-surface-0)] flex items-center justify-center">
      <GradientSun size="lg" className="absolute top-[-100px]" />
      <span className="relative z-10 text-4xl font-bold uppercase tracking-widest text-[var(--color-text-primary)] font-[var(--font-heading)]">
        PARADISE
      </span>
    </div>
  ),
};
