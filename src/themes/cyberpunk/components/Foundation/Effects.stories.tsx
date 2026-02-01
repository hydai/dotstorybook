import type { Meta, StoryObj } from "@storybook/react";
import { cyberpunkDecorator } from "../../storyDecorator";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-xl">
      {/* Glows */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          NEON GLOWS
        </h2>
        <div className="space-y-4">
          <div
            className="h-16 border border-[var(--color-accent)] flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-accent)] uppercase tracking-widest font-[var(--font-label)]">
              Green Glow
            </span>
          </div>
          <div
            className="h-16 border border-[var(--color-secondary)] flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(255, 0, 255, 0.4), 0 0 20px rgba(255, 0, 255, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-secondary)] uppercase tracking-widest font-[var(--font-label)]">
              Magenta Glow
            </span>
          </div>
          <div
            className="h-16 border border-[var(--color-tertiary)] flex items-center justify-center"
            style={{
              boxShadow:
                "0 0 10px rgba(0, 212, 255, 0.4), 0 0 20px rgba(0, 212, 255, 0.2)",
            }}
          >
            <span className="text-xs text-[var(--color-tertiary)] uppercase tracking-widest font-[var(--font-label)]">
              Cyan Glow
            </span>
          </div>
        </div>
      </div>

      {/* Chamfered Corners */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          CHAMFERED CORNERS
        </h2>
        <div className="flex gap-4">
          <div className="h-24 w-24 bg-[var(--color-surface-2)] border border-[var(--color-border)] cyber-chamfer-sm flex items-center justify-center">
            <span className="text-xs text-[var(--color-text-muted)]">SM</span>
          </div>
          <div className="h-24 w-24 bg-[var(--color-surface-2)] border border-[var(--color-border)] cyber-chamfer-md flex items-center justify-center">
            <span className="text-xs text-[var(--color-text-muted)]">MD</span>
          </div>
          <div className="h-24 w-24 bg-[var(--color-surface-2)] border border-[var(--color-border)] cyber-chamfer-lg flex items-center justify-center">
            <span className="text-xs text-[var(--color-text-muted)]">LG</span>
          </div>
        </div>
      </div>

      {/* Chromatic Aberration */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          CHROMATIC ABERRATION
        </h2>
        <p
          className="cyber-chromatic text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-heading)]"
          data-text="RGB SPLIT"
        >
          RGB SPLIT
        </p>
      </div>

      {/* Scanlines */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          SCANLINES
        </h2>
        <div className="relative h-32 bg-[var(--color-surface-1)] flex items-center justify-center overflow-hidden">
          <div className="cyber-scanline-overlay" style={{ position: "absolute" }} />
          <span className="text-sm text-[var(--color-text-secondary)] z-10 font-[var(--font-label)]">
            SCANLINE OVERLAY ACTIVE
          </span>
        </div>
      </div>

      {/* Circuit Grid */}
      <div>
        <h2
          className="text-lg font-bold text-[var(--color-text-primary)] mb-4 uppercase tracking-widest font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(0, 255, 136, 0.4), 0 0 20px rgba(0, 255, 136, 0.2)",
          }}
        >
          CIRCUIT GRID
        </h2>
        <div className="relative h-32 bg-[var(--color-surface-0)] flex items-center justify-center overflow-hidden">
          <div className="circuit-grid-overlay" style={{ position: "absolute" }} />
          <span className="text-sm text-[var(--color-text-secondary)] z-10 font-[var(--font-label)]">
            CIRCUIT GRID OVERLAY
          </span>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Cyberpunk/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [cyberpunkDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
