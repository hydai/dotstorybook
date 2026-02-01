import type { Meta, StoryObj } from "@storybook/react";
import { clayDecorator } from "../../storyDecorator";
import { shadows } from "../../tokens";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-2xl">
      {/* Convex vs Recessed */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Convex vs Recessed
        </h2>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-32 w-32 rounded-[32px] bg-white/70 flex items-center justify-center"
              style={{ boxShadow: shadows.clayCard }}
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                Convex
              </span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
              clayCard
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-32 w-32 rounded-[32px] bg-[#EFEBF5] flex items-center justify-center"
              style={{ boxShadow: shadows.clayPressed }}
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                Recessed
              </span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
              clayPressed
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
            Object.entries(shadows) as [string, string][]
          ).map(([name, value]) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div
                className="h-24 w-24 rounded-[20px] bg-white/70 flex items-center justify-center"
                style={{ boxShadow: value }}
              />
              <span className="text-xs text-[var(--color-text-muted)] font-[var(--font-mono)]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Glass-Clay Hybrid */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Glass-Clay Hybrid
        </h2>
        <div
          className="p-8 rounded-[32px] bg-white/60 backdrop-blur-xl"
          style={{ boxShadow: shadows.clayCard }}
        >
          <p className="text-base text-[var(--color-text-primary)] font-[var(--font-body)]">
            Combining glass morphism (backdrop-blur, semi-transparent bg) with
            clay shadows creates a frosted, tactile surface.
          </p>
        </div>
      </div>

      {/* Gradient Text */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Gradient Text
        </h2>
        <p className="text-4xl font-black font-[var(--font-heading)] bg-gradient-to-r from-[#7C3AED] via-[#DB2777] to-[#0EA5E9] bg-clip-text text-transparent">
          Violet → Pink → Sky
        </p>
        <p className="mt-4 text-4xl font-black font-[var(--font-heading)] bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent">
          Light Violet → Violet
        </p>
      </div>

      {/* Border Radius Scale */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Radius Scale
        </h2>
        <div className="flex gap-6 items-end">
          {[
            { label: "sm (12px)", radius: "12px", size: "h-16 w-16" },
            { label: "md (20px)", radius: "20px", size: "h-20 w-20" },
            { label: "lg (32px)", radius: "32px", size: "h-24 w-24" },
            { label: "xl (48px)", radius: "48px", size: "h-28 w-28" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div
                className={`${item.size} bg-white/70 flex items-center justify-center`}
                style={{
                  borderRadius: item.radius,
                  boxShadow: shadows.clayCard,
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
  title: "Clay/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [clayDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
