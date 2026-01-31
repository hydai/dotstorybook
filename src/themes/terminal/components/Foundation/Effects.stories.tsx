import type { Meta, StoryObj } from "@storybook/react";
import { terminalDecorator } from "../../storyDecorator";

function EffectsShowcase() {
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
          {"> TEXT GLOW"}
        </h2>
        <div className="space-y-3">
          <p
            className="text-2xl font-bold text-[var(--color-accent)]"
            style={{
              textShadow:
                "0 0 10px rgba(51, 255, 0, 0.4), 0 0 20px rgba(51, 255, 0, 0.2)",
            }}
          >
            PRIMARY GLOW
          </p>
          <p
            className="text-2xl font-bold text-[var(--color-warning)]"
            style={{
              textShadow:
                "0 0 10px rgba(255, 176, 0, 0.4), 0 0 20px rgba(255, 176, 0, 0.2)",
            }}
          >
            SECONDARY GLOW
          </p>
          <p
            className="text-2xl font-bold text-[var(--color-error)]"
            style={{
              textShadow:
                "0 0 10px rgba(255, 51, 51, 0.4), 0 0 20px rgba(255, 51, 51, 0.2)",
            }}
          >
            ERROR GLOW
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
          {"> SCANLINES"}
        </h2>
        <div
          className="relative h-32 border border-[var(--color-border)] flex items-center justify-center overflow-hidden"
        >
          <p className="text-sm text-[var(--color-text-primary)] z-10">
            SCANLINE OVERLAY DEMO
          </p>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.15) 2px, rgba(0, 0, 0, 0.15) 4px)",
              animation: "scanline-scroll 0.5s linear infinite",
            }}
          />
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
          {"> VIGNETTE"}
        </h2>
        <div
          className="relative h-32 border border-[var(--color-border)] flex items-center justify-center overflow-hidden"
        >
          <p className="text-sm text-[var(--color-text-primary)] z-10">
            VIGNETTE OVERLAY DEMO
          </p>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.6) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Terminal/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [terminalDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
