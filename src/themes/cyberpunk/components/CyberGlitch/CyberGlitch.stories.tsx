import type { Meta, StoryObj } from "@storybook/react";
import { CyberGlitch } from "./CyberGlitch";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/CyberGlitch",
  component: CyberGlitch,
  decorators: [cyberpunkDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["chromatic", "glitch", "flicker"],
    },
    as: {
      control: "select",
      options: ["span", "h1", "h2", "h3", "p"],
    },
    intensity: {
      control: "select",
      options: ["subtle", "medium", "intense"],
    },
  },
} satisfies Meta<typeof CyberGlitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chromatic: Story = {
  args: {
    children: "CHROMATIC SHIFT",
    variant: "chromatic",
    as: "h2",
    intensity: "medium",
  },
};

export const Glitch: Story = {
  args: {
    children: "DATA CORRUPT",
    variant: "glitch",
    as: "h2",
    intensity: "medium",
  },
};

export const Flicker: Story = {
  args: {
    children: "UNSTABLE SIGNAL",
    variant: "flicker",
    as: "h2",
    intensity: "medium",
  },
};

export const IntenseGlitch: Story = {
  args: {
    children: "CRITICAL ERROR",
    variant: "glitch",
    as: "h1",
    intensity: "intense",
  },
};

export const SubtleChromatic: Story = {
  args: {
    children: "Subtle aberration effect",
    variant: "chromatic",
    as: "p",
    intensity: "subtle",
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-widest">
          Chromatic
        </p>
        <CyberGlitch variant="chromatic" as="h2" className="text-3xl font-bold">
          CHROMATIC SHIFT
        </CyberGlitch>
      </div>
      <div>
        <p className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-widest">
          Glitch
        </p>
        <CyberGlitch variant="glitch" as="h2" className="text-3xl font-bold">
          DATA CORRUPT
        </CyberGlitch>
      </div>
      <div>
        <p className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-widest">
          Flicker
        </p>
        <CyberGlitch variant="flicker" as="h2" className="text-3xl font-bold">
          UNSTABLE SIGNAL
        </CyberGlitch>
      </div>
    </div>
  ),
};
