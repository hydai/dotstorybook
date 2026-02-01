import type { Meta, StoryObj } from "@storybook/react";
import { maximalismDecorator } from "../../storyDecorator";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-xl">
      {/* Glow Shadows */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Glow Shadows
        </h2>
        <div className="flex gap-4 flex-wrap">
          {[
            { name: "Magenta", color: "rgba(255, 58, 242, 0.4)", colorLg: "rgba(255, 58, 242, 0.2)" },
            { name: "Cyan", color: "rgba(0, 245, 212, 0.4)", colorLg: "rgba(0, 245, 212, 0.2)" },
            { name: "Yellow", color: "rgba(255, 230, 0, 0.4)", colorLg: "rgba(255, 230, 0, 0.2)" },
            { name: "Orange", color: "rgba(255, 107, 53, 0.4)", colorLg: "rgba(255, 107, 53, 0.2)" },
            { name: "Purple", color: "rgba(123, 47, 255, 0.4)", colorLg: "rgba(123, 47, 255, 0.2)" },
          ].map((glow) => (
            <div
              key={glow.name}
              className="h-20 w-28 rounded-2xl bg-[var(--color-surface-1)] border-2 border-white/10 flex items-center justify-center"
              style={{
                boxShadow: `0 0 10px ${glow.color}, 0 0 20px ${glow.colorLg}`,
              }}
            >
              <span className="text-xs font-bold text-white font-[var(--font-heading)]">
                {glow.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hard (Stacked) Shadows */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Hard Shadows (Stacked)
        </h2>
        <div className="flex gap-8 flex-wrap">
          {[
            { name: "SM", shadow: "4px 4px 0 #FF3AF2" },
            { name: "MD", shadow: "4px 4px 0 #FF3AF2, 8px 8px 0 #00F5D4" },
            { name: "LG", shadow: "4px 4px 0 #FF3AF2, 8px 8px 0 #00F5D4, 12px 12px 0 #FFE600" },
            { name: "XL", shadow: "4px 4px 0 #FF3AF2, 8px 8px 0 #00F5D4, 12px 12px 0 #FFE600, 16px 16px 0 #FF6B35" },
          ].map((item) => (
            <div
              key={item.name}
              className="h-20 w-28 rounded-2xl bg-[var(--color-surface-2)] border-4 border-white flex items-center justify-center"
              style={{ boxShadow: item.shadow }}
            >
              <span className="text-sm font-bold text-white font-[var(--font-heading)]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pattern Overlays */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Pattern Overlays
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Dots", className: "max-pattern-dots" },
            { name: "Stripes", className: "max-pattern-stripes" },
            { name: "Checkerboard", className: "max-pattern-checkerboard" },
            { name: "Mesh", className: "max-pattern-mesh" },
            { name: "Global", className: "max-pattern-global" },
            { name: "Full", className: "max-pattern-full" },
          ].map((pattern) => (
            <div
              key={pattern.name}
              className="relative h-32 rounded-2xl bg-[var(--color-surface-0)] border-2 border-white/10 overflow-hidden"
            >
              <div className={pattern.className} />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-xs font-bold text-white/70 font-[var(--font-heading)] uppercase">
                  {pattern.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Styles */}
      <div>
        <h2 className="text-lg font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">
          Border Styles
        </h2>
        <div className="flex gap-4 flex-wrap">
          <div className="h-20 w-32 rounded-2xl border-4 border-[#FF3AF2] flex items-center justify-center">
            <span className="text-xs font-bold text-[#FF3AF2] font-[var(--font-heading)]">Solid</span>
          </div>
          <div className="h-20 w-32 rounded-2xl border-4 border-dashed border-[#00F5D4] flex items-center justify-center">
            <span className="text-xs font-bold text-[#00F5D4] font-[var(--font-heading)]">Dashed</span>
          </div>
          <div className="h-20 w-32 rounded-2xl border-8 border-dotted border-[#FFE600] flex items-center justify-center">
            <span className="text-xs font-bold text-[#FFE600] font-[var(--font-heading)]">Dotted</span>
          </div>
          <div className="h-20 w-32 rounded-2xl border-4 border-double border-[#FF6B35] flex items-center justify-center">
            <span className="text-xs font-bold text-[#FF6B35] font-[var(--font-heading)]">Double</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Maximalism/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [maximalismDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
