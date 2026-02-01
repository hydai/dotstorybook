import type { Meta, StoryObj } from "@storybook/react";
import { vaporwaveDecorator } from "../../storyDecorator";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-xl">
      {/* Glows */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          NEON GLOWS
        </h2>
        <div className="space-y-4">
          <div
            className="h-16 border border-[var(--color-accent)] flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-accent)] uppercase tracking-widest font-[var(--font-label)]">
              Magenta Glow
            </span>
          </div>
          <div
            className="h-16 border border-[var(--color-secondary)] flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-secondary)] uppercase tracking-widest font-[var(--font-label)]">
              Cyan Glow
            </span>
          </div>
          <div
            className="h-16 border border-[var(--color-tertiary)] flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(255, 153, 0, 0.4), 0 0 20px rgba(255, 153, 0, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-tertiary)] uppercase tracking-widest font-[var(--font-label)]">
              Orange Glow
            </span>
          </div>
        </div>
      </div>

      {/* Sharp Corners */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          SHARP CORNERS
        </h2>
        <div className="flex gap-4">
          <div className="h-24 w-24 bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center">
            <span className="text-xs text-[var(--color-text-muted)]">
              SHARP
            </span>
          </div>
          <div className="h-24 w-24 bg-[var(--color-surface-2)] border border-[var(--color-accent)] flex items-center justify-center">
            <span className="text-xs text-[var(--color-accent)]">NEON</span>
          </div>
          <div className="h-24 w-24 bg-[var(--color-surface-2)] border border-[var(--color-secondary)] flex items-center justify-center">
            <span className="text-xs text-[var(--color-secondary)]">CYAN</span>
          </div>
        </div>
      </div>

      {/* Skew Demo */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          SKEW TRANSFORM
        </h2>
        <div className="flex gap-4">
          <div className="h-12 px-6 bg-[var(--color-secondary)] -skew-x-12 flex items-center justify-center">
            <span className="skew-x-12 text-xs text-white font-bold uppercase tracking-wider">
              -12deg
            </span>
          </div>
          <div className="h-12 px-6 border border-[var(--color-accent)] -skew-x-6 flex items-center justify-center">
            <span className="skew-x-6 text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider">
              -6deg
            </span>
          </div>
        </div>
      </div>

      {/* Gradient Text */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          GRADIENT TEXT
        </h2>
        <p className="text-4xl font-black uppercase tracking-widest font-[var(--font-heading)] bg-gradient-to-r from-[#FF9900] via-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent">
          SUNSET DREAM
        </p>
      </div>

      {/* Scanlines */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          SCANLINES
        </h2>
        <div className="relative h-32 bg-[var(--color-surface-1)] flex items-center justify-center overflow-hidden">
          <div
            className="vapor-scanline-overlay"
            style={{ position: "absolute" }}
          />
          <span className="text-sm text-[var(--color-text-secondary)] z-10 font-[var(--font-label)]">
            SCANLINE OVERLAY ACTIVE
          </span>
        </div>
      </div>

      {/* Perspective Grid */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
          }}
        >
          PERSPECTIVE GRID
        </h2>
        <div className="relative h-48 bg-[var(--color-surface-0)] flex items-center justify-center overflow-hidden">
          <div className="vapor-perspective-grid" />
          <span className="text-sm text-[var(--color-text-secondary)] z-10 font-[var(--font-label)]">
            WIREFRAME GRID FLOOR
          </span>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Vaporwave/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [vaporwaveDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
