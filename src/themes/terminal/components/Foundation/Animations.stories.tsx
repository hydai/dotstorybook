import type { Meta, StoryObj } from "@storybook/react";
import { terminalDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest"
          style={{
            textShadow:
              "0 0 10px rgba(51, 255, 0, 0.4), 0 0 20px rgba(51, 255, 0, 0.2)",
          }}
        >
          {"> BLINK"}
        </h2>
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-3 h-5 bg-[var(--color-accent)]"
            style={{ animation: "blink 1s step-end infinite" }}
          />
          <span className="text-sm text-[var(--color-text-secondary)]">
            Cursor blink — step-end timing
          </span>
        </div>
      </div>

      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest"
          style={{
            textShadow:
              "0 0 10px rgba(51, 255, 0, 0.4), 0 0 20px rgba(51, 255, 0, 0.2)",
          }}
        >
          {"> TYPEWRITER"}
        </h2>
        <div className="overflow-hidden">
          <p
            className="text-sm text-[var(--color-text-primary)] whitespace-nowrap overflow-hidden border-r-2 border-[var(--color-accent)]"
            style={{
              animation:
                "typewriter 3s steps(40) 1s forwards, blink 0.75s step-end infinite",
              width: "0",
            }}
          >
            Establishing secure connection to mainframe...
          </p>
        </div>
      </div>

      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest"
          style={{
            textShadow:
              "0 0 10px rgba(51, 255, 0, 0.4), 0 0 20px rgba(51, 255, 0, 0.2)",
          }}
        >
          {"> GLITCH"}
        </h2>
        <p
          className="glitch-text text-3xl font-bold text-[var(--color-text-primary)]"
          data-text="CORRUPTED DATA"
        >
          CORRUPTED DATA
        </p>
      </div>

      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest"
          style={{
            textShadow:
              "0 0 10px rgba(51, 255, 0, 0.4), 0 0 20px rgba(51, 255, 0, 0.2)",
          }}
        >
          {"> FLICKER"}
        </h2>
        <p
          className="text-3xl font-bold text-[var(--color-text-primary)]"
          style={{ animation: "flicker 4s infinite" }}
        >
          UNSTABLE SIGNAL
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Terminal/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [terminalDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
