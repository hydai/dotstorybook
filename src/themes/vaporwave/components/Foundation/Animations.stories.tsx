import type { Meta, StoryObj } from "@storybook/react";
import { vaporwaveDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      {/* Blink */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          BLINK
        </h2>
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-3 h-5 bg-[var(--color-accent)]"
            style={{ animation: "vapor-blink 1s step-end infinite" }}
          />
          <span className="text-sm text-[var(--color-text-secondary)] font-[var(--font-mono)]">
            Cursor blink — step-end timing
          </span>
        </div>
      </div>

      {/* Chromatic Shift */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          CHROMATIC SHIFT
        </h2>
        <p
          className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]"
          style={{ animation: "chromatic-shift-vapor 2s infinite linear" }}
        >
          RGB ABERRATION
        </p>
      </div>

      {/* Neon Pulse */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          NEON PULSE
        </h2>
        <div className="flex gap-4">
          <div
            className="h-16 w-32 border border-[var(--color-accent)] flex items-center justify-center"
            style={{
              animation: "neon-pulse-magenta-vapor 2s ease-in-out infinite",
            }}
          >
            <span className="text-xs text-[var(--color-accent)] uppercase font-[var(--font-label)]">
              MAGENTA
            </span>
          </div>
          <div
            className="h-16 w-32 border border-[var(--color-secondary)] flex items-center justify-center"
            style={{
              animation: "neon-pulse-cyan-vapor 2s ease-in-out infinite",
            }}
          >
            <span className="text-xs text-[var(--color-secondary)] uppercase font-[var(--font-label)]">
              CYAN
            </span>
          </div>
          <div
            className="h-16 w-32 border border-[var(--color-tertiary)] flex items-center justify-center"
            style={{
              animation: "neon-pulse-orange-vapor 2s ease-in-out infinite",
            }}
          >
            <span className="text-xs text-[var(--color-tertiary)] uppercase font-[var(--font-label)]">
              ORANGE
            </span>
          </div>
        </div>
      </div>

      {/* Flicker */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          FLICKER
        </h2>
        <p
          className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]"
          style={{ animation: "flicker-vapor 4s infinite" }}
        >
          UNSTABLE SIGNAL
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Vaporwave/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [vaporwaveDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
