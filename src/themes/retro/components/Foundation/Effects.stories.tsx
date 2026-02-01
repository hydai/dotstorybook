import type { Meta, StoryObj } from "@storybook/react";
import { retroDecorator } from "../../storyDecorator";
import { shadows, borderColors, colors } from "../../tokens";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-2xl">
      {/* Outset vs Inset Bevels */}
      <div>
        <h2 className="text-base font-bold text-black mb-6 font-[var(--font-heading)] uppercase">
          Outset vs Inset Bevels
        </h2>
        <div className="flex gap-8 items-center">
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-24 w-24 bg-[#C0C0C0] flex items-center justify-center"
              style={{
                boxShadow: shadows.outsetDeep,
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: borderColors.outset,
                borderRadius: 0,
              }}
            >
              <span className="text-xs font-bold font-[var(--font-body)]">
                OUTSET
              </span>
            </div>
            <span className="text-xs text-[#808080] font-[var(--font-mono)]">
              outsetDeep
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-24 w-24 bg-white flex items-center justify-center"
              style={{
                boxShadow: shadows.insetDeep,
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: borderColors.inset,
                borderRadius: 0,
              }}
            >
              <span className="text-xs font-bold font-[var(--font-body)]">
                INSET
              </span>
            </div>
            <span className="text-xs text-[#808080] font-[var(--font-mono)]">
              insetDeep
            </span>
          </div>
        </div>
      </div>

      {/* Tiled Background */}
      <div>
        <h2 className="text-base font-bold text-black mb-6 font-[var(--font-heading)] uppercase">
          Tiled Background Pattern
        </h2>
        <div
          className="bg-retro-tile h-32 flex items-center justify-center"
          style={{
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: borderColors.inset,
            borderRadius: 0,
          }}
        >
          <span className="text-sm font-bold font-[var(--font-body)]">
            .bg-retro-tile
          </span>
        </div>
      </div>

      {/* Construction Stripes */}
      <div>
        <h2 className="text-base font-bold text-black mb-6 font-[var(--font-heading)] uppercase">
          Construction Stripes
        </h2>
        <div
          className="bg-construction h-16 flex items-center justify-center"
          style={{
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: borderColors.outset,
            borderRadius: 0,
          }}
        >
          <span className="bg-[#FFFF00] px-3 py-1 font-bold text-sm font-[var(--font-body)]">
            .bg-construction
          </span>
        </div>
      </div>

      {/* Groove Horizontal Rule */}
      <div>
        <h2 className="text-base font-bold text-black mb-6 font-[var(--font-heading)] uppercase">
          Groove HR
        </h2>
        <p className="text-sm font-[var(--font-body)] mb-2">
          Content above the groove
        </p>
        <hr className="hr-groove" />
        <p className="text-sm font-[var(--font-body)] mt-2">
          Content below the groove
        </p>
      </div>

      {/* Hit Counter Display */}
      <div>
        <h2 className="text-base font-bold text-black mb-6 font-[var(--font-heading)] uppercase">
          Hit Counter Display
        </h2>
        <div
          className="inline-flex items-center gap-3 bg-[#000033] px-4 py-2"
          style={{
            boxShadow: shadows.insetDeep,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: borderColors.inset,
            borderRadius: 0,
          }}
        >
          <span className="text-xs text-[#00FF00] font-[var(--font-mono)]">
            Visitors:
          </span>
          <span className="text-lg text-[#00FF00] font-bold tracking-[0.2em] font-[var(--font-mono)]">
            0001337
          </span>
        </div>
      </div>

      {/* Win95 Title Bar */}
      <div>
        <h2 className="text-base font-bold text-black mb-6 font-[var(--font-heading)] uppercase">
          Win95 Title Bar Gradient
        </h2>
        <div
          className="flex items-center justify-between px-2 py-1 w-80"
          style={{
            background: `linear-gradient(90deg, ${colors.titleBar.start}, ${colors.titleBar.end})`,
          }}
        >
          <span className="text-white font-bold text-sm font-[var(--font-body)]">
            My Computer
          </span>
          <div className="flex gap-0.5">
            {["_", "\u25A1", "\u00D7"].map((char) => (
              <span
                key={char}
                className="w-4 h-4 bg-[#C0C0C0] flex items-center justify-center text-[10px] leading-none font-bold"
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: borderColors.outset,
                  borderRadius: 0,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-[#808080] mt-2 font-[var(--font-mono)]">
          linear-gradient(90deg, #000080, #1084D0)
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Retro/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [retroDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
