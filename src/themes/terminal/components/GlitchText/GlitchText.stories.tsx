import type { Meta, StoryObj } from "@storybook/react";
import { GlitchText } from "./GlitchText";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/GlitchText",
  component: GlitchText,
  decorators: [terminalDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["glitch", "flicker"],
    },
    as: {
      control: "select",
      options: ["span", "h1", "h2", "h3", "p"],
    },
  },
} satisfies Meta<typeof GlitchText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Glitch: Story = {
  args: {
    children: "SYSTEM MALFUNCTION",
    variant: "glitch",
    className: "text-4xl font-bold",
  },
};

export const Flicker: Story = {
  args: {
    children: "SIGNAL LOST",
    variant: "flicker",
    className: "text-4xl font-bold",
  },
};

export const AsHeading: Story = {
  args: {
    children: "CRITICAL ERROR",
    as: "h1",
    variant: "glitch",
    className: "text-5xl font-bold uppercase tracking-widest",
  },
};

export const AllVariants: Story = {
  args: { children: "ALL" },
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-[var(--color-text-muted)] mb-2">
          GLITCH VARIANT:
        </p>
        <GlitchText variant="glitch" className="text-3xl font-bold">
          SYSTEM MALFUNCTION
        </GlitchText>
      </div>
      <div>
        <p className="text-xs text-[var(--color-text-muted)] mb-2">
          FLICKER VARIANT:
        </p>
        <GlitchText variant="flicker" className="text-3xl font-bold">
          SIGNAL LOST
        </GlitchText>
      </div>
    </div>
  ),
};
