import type { Meta, StoryObj } from "@storybook/react";
import { artDecoDecorator } from "../../storyDecorator";

function AnimationsShowcase() {
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
          GOLD PULSE
        </h2>
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 bg-[var(--color-accent)]"
            style={{ animation: "gold-pulse 2s ease-in-out infinite" }}
          />
          <span className="text-sm text-[var(--color-text-secondary)]">
            Subtle opacity oscillation for accent elements
          </span>
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
          SUNBURST ROTATE
        </h2>
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.3), transparent, rgba(212, 175, 55, 0.3))",
              animation: "sunburst-rotate 8s linear infinite",
            }}
          />
          <span className="text-sm text-[var(--color-text-secondary)]">
            Slow 360° rotation for background sunburst
          </span>
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
          DECO FADE IN
        </h2>
        <p
          className="text-2xl font-normal text-[var(--color-text-primary)] uppercase tracking-[0.2em] font-[var(--font-heading)]"
          style={{ animation: "deco-fade-in 0.6s ease-out forwards" }}
        >
          THE ROARING TWENTIES
        </p>
      </div>

      <div>
        <h2
          className="text-lg font-normal text-[var(--color-accent)] mb-4 uppercase tracking-[0.2em] font-[var(--font-heading)]"
          style={{
            textShadow:
              "0 0 10px rgba(212, 175, 55, 0.3), 0 0 20px rgba(212, 175, 55, 0.15)",
          }}
        >
          BORDER GLOW
        </h2>
        <div
          className="p-6 border-2"
          style={{ animation: "border-glow 3s ease-in-out infinite" }}
        >
          <p className="text-sm text-[var(--color-text-primary)]">
            Pulsing border glow effect for hover and emphasis
          </p>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Art Deco/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [artDecoDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
