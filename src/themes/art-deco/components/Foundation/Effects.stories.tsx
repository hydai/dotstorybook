import type { Meta, StoryObj } from "@storybook/react";
import { artDecoDecorator } from "../../storyDecorator";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      <div>
        <h2
          className="text-lg font-normal text-[var(--color-accent)] mb-4 uppercase tracking-[0.2em] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
          }}
        >
          GOLD GLOW TEXT
        </h2>
        <div className="space-y-3">
          <p
            className="text-2xl font-normal text-[var(--color-accent)] uppercase tracking-[0.2em] font-[var(--font-heading)]"
            style={{
              textShadow:
                "0 0 10px rgba(212, 175, 55, 0.4), 0 0 20px rgba(212, 175, 55, 0.2)",
            }}
          >
            METALLIC GOLD
          </p>
          <p
            className="text-2xl font-normal text-[var(--color-text-primary)] uppercase tracking-[0.2em] font-[var(--font-heading)]"
            style={{
              textShadow:
                "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
            }}
          >
            CHAMPAGNE CREAM
          </p>
        </div>
      </div>

      <div>
        <h2
          className="text-lg font-normal text-[var(--color-accent)] mb-4 uppercase tracking-[0.2em] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
          }}
        >
          CROSSHATCH OVERLAY
        </h2>
        <div className="relative h-32 border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
          <p className="text-sm text-[var(--color-text-primary)] z-10 uppercase tracking-wider">
            CROSSHATCH PATTERN DEMO
          </p>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.06) 10px, rgba(212, 175, 55, 0.06) 11px),
                repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.06) 10px, rgba(212, 175, 55, 0.06) 11px)
              `,
            }}
          />
        </div>
      </div>

      <div>
        <h2
          className="text-lg font-normal text-[var(--color-accent)] mb-4 uppercase tracking-[0.2em] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
          }}
        >
          SUNBURST GRADIENT
        </h2>
        <div className="relative h-32 border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
          <p className="text-sm text-[var(--color-text-primary)] z-10 uppercase tracking-wider">
            RADIAL SUNBURST
          </p>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, transparent, rgba(212, 175, 55, 0.1), transparent, rgba(212, 175, 55, 0.1), transparent, rgba(212, 175, 55, 0.1), transparent, rgba(212, 175, 55, 0.1))",
            }}
          />
        </div>
      </div>

      <div>
        <h2
          className="text-lg font-normal text-[var(--color-accent)] mb-4 uppercase tracking-[0.2em] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
          }}
        >
          STEPPED CORNERS
        </h2>
        <div className="relative h-32 border border-[var(--color-border)] flex items-center justify-center overflow-hidden p-4">
          <p className="text-sm text-[var(--color-text-primary)] z-10 uppercase tracking-wider">
            DECORATIVE CORNERS
          </p>
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Art Deco/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [artDecoDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
