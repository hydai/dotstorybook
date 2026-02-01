import type { Meta, StoryObj } from "@storybook/react";
import { industrialDecorator } from "../../storyDecorator";
import { shadows } from "../../tokens";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-2xl">
      {/* Raised vs Recessed */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Raised vs Recessed
        </h2>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-32 w-32 rounded-[var(--radius-lg)] bg-[var(--color-surface-0)] flex items-center justify-center"
              style={{ boxShadow: shadows.card }}
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                Raised
              </span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
              card
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-32 w-32 rounded-[var(--radius-lg)] bg-[var(--color-surface-2)] flex items-center justify-center"
              style={{ boxShadow: shadows.recessed }}
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                Recessed
              </span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
              recessed
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-32 w-32 rounded-[var(--radius-lg)] bg-[var(--color-surface-2)] flex items-center justify-center"
              style={{ boxShadow: shadows.pressed }}
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                Pressed
              </span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
              pressed
            </span>
          </div>
        </div>
      </div>

      {/* All Shadow Presets */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Shadow Presets
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {(
            [
              ["card", shadows.card],
              ["floating", shadows.floating],
              ["pressed", shadows.pressed],
              ["recessed", shadows.recessed],
              ["button", shadows.button],
              ["hoverCard", shadows.hoverCard],
            ] as [string, string][]
          ).map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div
                className="h-24 w-24 rounded-[var(--radius-md)] bg-[var(--color-surface-0)] flex items-center justify-center"
                style={{ boxShadow: value }}
              />
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Screws */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Corner Screws
        </h2>
        <div
          className="relative p-8 rounded-[var(--radius-lg)] bg-[var(--color-surface-0)]"
          style={{ boxShadow: shadows.card }}
        >
          {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
            (pos) => (
              <span
                key={pos}
                className={`absolute w-2 h-2 rounded-full ${pos}`}
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, #f0f2f5 0%, #c8cfd8 50%, #a3b1c6 100%)",
                  boxShadow:
                    "inset 1px 1px 2px rgba(255, 255, 255, 0.6), inset -1px -1px 2px rgba(163, 177, 198, 0.4)",
                }}
              />
            )
          )}
          <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)] text-center">
            Panel with corner screws — 8x8px radial-gradient circles
          </p>
        </div>
      </div>

      {/* Vent Slots */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Vent Slots
        </h2>
        <div
          className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-surface-0)]"
          style={{ boxShadow: shadows.card }}
        >
          <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)] text-center mb-4">
            Recessed pill-shaped vent slots
          </p>
          <div className="flex gap-1.5 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-6 h-1 rounded-full"
                style={{
                  boxShadow:
                    "inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff",
                  backgroundColor: "#d1d9e6",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Noise Overlay */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Noise Texture
        </h2>
        <div
          className="relative h-32 rounded-[var(--radius-lg)] bg-[var(--color-surface-0)] flex items-center justify-center overflow-hidden"
          style={{ boxShadow: shadows.card }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.025,
              backgroundImage: "url(/noise.svg)",
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          <p className="text-sm text-[var(--color-text-secondary)] font-[var(--font-body)] relative z-10">
            Noise overlay at 2.5% opacity
          </p>
        </div>
      </div>

      {/* Radius Scale */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Radius Scale
        </h2>
        <div className="flex gap-6 items-end">
          {[
            { label: "sm (4px)", radius: "4px", size: "h-16 w-16" },
            { label: "md (8px)", radius: "8px", size: "h-20 w-20" },
            { label: "lg (16px)", radius: "16px", size: "h-24 w-24" },
            { label: "xl (24px)", radius: "24px", size: "h-28 w-28" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div
                className={`${item.size} bg-[var(--color-surface-0)] flex items-center justify-center`}
                style={{
                  borderRadius: item.radius,
                  boxShadow: shadows.card,
                }}
              />
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Industrial/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [industrialDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
