import type { Meta, StoryObj } from "@storybook/react";
import { CircuitBackground } from "./CircuitBackground";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/CircuitBackground",
  component: CircuitBackground,
  decorators: [cyberpunkDecorator],
  argTypes: {
    density: {
      control: "select",
      options: ["normal", "dense"],
    },
    showScanlines: { control: "boolean" },
  },
} satisfies Meta<typeof CircuitBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    density: "normal",
    children: (
      <div className="flex items-center justify-center min-h-[400px]">
        <p
          className="text-3xl font-bold text-[var(--color-accent)] uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          CIRCUIT GRID
        </p>
      </div>
    ),
  },
};

export const Dense: Story = {
  args: {
    density: "dense",
    children: (
      <div className="flex items-center justify-center min-h-[400px]">
        <p
          className="text-3xl font-bold text-[var(--color-accent)] uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          DENSE GRID
        </p>
      </div>
    ),
  },
};

export const WithScanlines: Story = {
  args: {
    density: "dense",
    showScanlines: true,
    children: (
      <div className="flex items-center justify-center min-h-[400px]">
        <p
          className="text-3xl font-bold text-[var(--color-accent)] uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          FULL OVERLAY
        </p>
      </div>
    ),
  },
};
