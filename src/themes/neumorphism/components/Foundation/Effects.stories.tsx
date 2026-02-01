import type { Meta, StoryObj } from "@storybook/react";
import { neumorphismDecorator } from "../../storyDecorator";
import { shadows } from "../../tokens";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-2xl">
      {/* Extruded vs Inset */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Extruded vs Inset
        </h2>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-32 w-32 rounded-[24px] bg-[#E0E5EC] flex items-center justify-center"
              style={{ boxShadow: shadows.extruded }}
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                Extruded
              </span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              extruded
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-32 w-32 rounded-[24px] bg-[#E0E5EC] flex items-center justify-center"
              style={{ boxShadow: shadows.inset }}
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)] font-[var(--font-body)]">
                Inset
              </span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">
              inset
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
          {(Object.entries(shadows) as [string, string][]).map(
            ([name, value]) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div
                  className="h-24 w-24 rounded-[20px] bg-[#E0E5EC] flex items-center justify-center"
                  style={{ boxShadow: value }}
                />
                <span className="text-xs text-[var(--color-text-muted)] font-mono">
                  {name}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Radius Scale */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Radius Scale
        </h2>
        <div className="flex gap-6 items-end">
          {[
            { label: "sm (12px)", radius: "12px", size: "h-16 w-16" },
            { label: "md (16px)", radius: "16px", size: "h-20 w-20" },
            { label: "lg (24px)", radius: "24px", size: "h-24 w-24" },
            { label: "xl (32px)", radius: "32px", size: "h-28 w-28" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div
                className={`${item.size} bg-[#E0E5EC] flex items-center justify-center`}
                style={{
                  borderRadius: item.radius,
                  boxShadow: shadows.extruded,
                }}
              />
              <span className="text-xs text-[var(--color-text-muted)] font-mono">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Text */}
      <div>
        <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-heading)]">
          Gradient Text
        </h2>
        <p className="text-4xl font-extrabold font-[var(--font-heading)] bg-gradient-to-r from-[#6C63FF] via-[#38B2AC] to-[#6C63FF] bg-clip-text text-transparent">
          Indigo → Teal → Indigo
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Neumorphism/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [neumorphismDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
