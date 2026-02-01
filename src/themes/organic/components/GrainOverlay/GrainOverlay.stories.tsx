import type { Meta, StoryObj } from "@storybook/react";
import { GrainOverlay } from "./GrainOverlay";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/GrainOverlay",
  component: GrainOverlay,
  decorators: [organicDecorator],
  argTypes: {
    opacity: { control: { type: "range", min: 0, max: 0.15, step: 0.005 } },
    fixed: { control: "boolean" },
  },
} satisfies Meta<typeof GrainOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { opacity: 0.035, fixed: false },
  render: (args) => (
    <div className="relative w-96 h-64 bg-[var(--color-surface-0)] rounded-[2rem] overflow-hidden flex items-center justify-center">
      <GrainOverlay {...args} />
      <p className="relative z-10 text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-body)]">
        Paper grain texture overlay
      </p>
    </div>
  ),
};

export const HighOpacity: Story = {
  args: { opacity: 0.08, fixed: false },
  render: (args) => (
    <div className="relative w-96 h-64 bg-[var(--color-surface-0)] rounded-[2rem] overflow-hidden flex items-center justify-center">
      <GrainOverlay {...args} />
      <p className="relative z-10 text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-body)]">
        Higher opacity grain (0.08)
      </p>
    </div>
  ),
};

export const OnColoredBackground: Story = {
  args: { opacity: 0.05, fixed: false },
  render: (args) => (
    <div className="flex gap-4">
      <div className="relative w-48 h-48 bg-[var(--color-accent)] rounded-[2rem] overflow-hidden flex items-center justify-center">
        <GrainOverlay {...args} />
        <p className="relative z-10 text-sm font-medium text-[var(--color-text-inverse)] font-[var(--font-body)]">
          Moss
        </p>
      </div>
      <div className="relative w-48 h-48 bg-[var(--color-secondary)] rounded-[2rem] overflow-hidden flex items-center justify-center">
        <GrainOverlay {...args} />
        <p className="relative z-10 text-sm font-medium text-[var(--color-text-inverse)] font-[var(--font-body)]">
          Clay
        </p>
      </div>
      <div className="relative w-48 h-48 bg-[var(--color-surface-3)] rounded-[2rem] overflow-hidden flex items-center justify-center">
        <GrainOverlay {...args} />
        <p className="relative z-10 text-sm font-medium text-[var(--color-text-primary)] font-[var(--font-body)]">
          Sand
        </p>
      </div>
    </div>
  ),
};
