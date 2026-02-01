import type { Meta, StoryObj } from "@storybook/react";
import { ScanlineOverlay } from "./ScanlineOverlay";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/ScanlineOverlay",
  component: ScanlineOverlay,
  decorators: [cyberpunkDecorator],
  argTypes: {
    opacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
    tint: {
      control: "select",
      options: ["green", "neutral"],
    },
  },
} satisfies Meta<typeof ScanlineOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GreenTint: Story = {
  args: { opacity: 1, tint: "green" },
  render: (args) => (
    <div className="relative w-[400px] h-[300px] bg-[var(--color-surface-0)] flex items-center justify-center overflow-hidden">
      <ScanlineOverlay {...args} />
      <p
        className="text-2xl font-bold text-[var(--color-accent)] z-10 uppercase tracking-widest font-[var(--font-heading)]"
        style={{
          textShadow:
            "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
        }}
      >
        SCANLINES ACTIVE
      </p>
    </div>
  ),
};

export const NeutralTint: Story = {
  args: { opacity: 1, tint: "neutral" },
  render: (args) => (
    <div className="relative w-[400px] h-[300px] bg-[var(--color-surface-0)] flex items-center justify-center overflow-hidden">
      <ScanlineOverlay {...args} />
      <p className="text-2xl font-bold text-[var(--color-text-primary)] z-10 uppercase tracking-widest font-[var(--font-heading)]">
        NEUTRAL SCANLINES
      </p>
    </div>
  ),
};

export const SubtleOpacity: Story = {
  args: { opacity: 0.3, tint: "green" },
  render: (args) => (
    <div className="relative w-[400px] h-[300px] bg-[var(--color-surface-0)] flex items-center justify-center overflow-hidden">
      <ScanlineOverlay {...args} />
      <p className="text-2xl font-bold text-[var(--color-text-primary)] z-10 uppercase tracking-widest font-[var(--font-heading)]">
        SUBTLE OVERLAY
      </p>
    </div>
  ),
};
