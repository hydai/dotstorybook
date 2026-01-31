import type { Meta, StoryObj } from "@storybook/react";
import { CRTBackground } from "./CRTBackground";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/CRTBackground",
  component: CRTBackground,
  decorators: [terminalDecorator],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    showScanlines: { control: "boolean" },
    showFlicker: { control: "boolean" },
    showVignette: { control: "boolean" },
  },
} satisfies Meta<typeof CRTBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showScanlines: true,
    showFlicker: true,
    showVignette: true,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-bold text-[var(--color-text-primary)] uppercase tracking-widest">
          CRT DISPLAY ACTIVE
        </p>
      </div>
    ),
  },
};

export const ScanlinesOnly: Story = {
  args: {
    showScanlines: true,
    showFlicker: false,
    showVignette: false,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-bold text-[var(--color-text-primary)] uppercase tracking-widest">
          SCANLINES ONLY
        </p>
      </div>
    ),
  },
};

export const NoEffects: Story = {
  args: {
    showScanlines: false,
    showFlicker: false,
    showVignette: false,
    children: (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl font-bold text-[var(--color-text-primary)] uppercase tracking-widest">
          CLEAN OUTPUT
        </p>
      </div>
    ),
  },
};
