import type { Meta, StoryObj } from "@storybook/react";
import { kineticDecorator } from "../../storyDecorator";
import { NoiseOverlay } from "../NoiseOverlay";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          MASSIVE NUMBERS
        </h2>
        <div className="relative border-2 border-[var(--color-border)] p-8 overflow-hidden h-64 flex items-end">
          <div
            aria-hidden="true"
            className="absolute top-0 right-4 text-[10rem] font-bold leading-none text-[var(--color-surface-3)] select-none tracking-tighter"
          >
            01
          </div>
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
              FEATURE
            </span>
            <h3 className="text-3xl font-bold uppercase tracking-tighter mt-2">
              DECORATIVE SCALE
            </h3>
            <p className="text-base text-[var(--color-text-secondary)] mt-1">
              Background numbers at 10rem create graphic depth layers.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          HAIRLINE GRID
        </h2>
        <div className="grid grid-cols-3 gap-px bg-[var(--color-border)]">
          {["01", "02", "03"].map((num) => (
            <div
              key={num}
              className="bg-[var(--color-surface-0)] p-8 flex flex-col items-start"
            >
              <span className="text-5xl font-bold tracking-tighter text-[var(--color-surface-3)]">
                {num}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mt-2">
                STEP {num}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          NOISE TEXTURE
        </h2>
        <div className="relative border-2 border-[var(--color-border)] p-8 overflow-hidden h-48 flex items-center justify-center">
          <p className="text-2xl font-bold uppercase tracking-tighter z-10">
            SUBTLE PRINT TEXTURE
          </p>
          <NoiseOverlay />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          SHARP BORDERS
        </h2>
        <div className="flex gap-4 items-center">
          <div className="border-2 border-[var(--color-border)] p-6">
            <span className="text-sm font-bold uppercase tracking-wider">
              2PX BORDER
            </span>
          </div>
          <div className="border-b-2 border-[var(--color-border)] p-6">
            <span className="text-sm font-bold uppercase tracking-wider">
              BOTTOM ONLY
            </span>
          </div>
          <div className="border-l-4 border-[var(--color-accent)] p-6">
            <span className="text-sm font-bold uppercase tracking-wider">
              ACCENT LEFT
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          CONTRAST EXTREMES
        </h2>
        <div className="flex gap-0">
          <div className="bg-[var(--color-surface-0)] border-2 border-[var(--color-border)] p-8 flex-1">
            <span className="text-lg font-bold uppercase tracking-tighter text-[var(--color-text-primary)]">
              DARK
            </span>
          </div>
          <div className="bg-[var(--color-accent)] p-8 flex-1">
            <span className="text-lg font-bold uppercase tracking-tighter text-[var(--color-text-inverse)]">
              ACCENT
            </span>
          </div>
          <div className="bg-[var(--color-text-primary)] p-8 flex-1">
            <span className="text-lg font-bold uppercase tracking-tighter text-[var(--color-text-inverse)]">
              LIGHT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Kinetic/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [kineticDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
