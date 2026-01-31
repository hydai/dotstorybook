import type { Meta, StoryObj } from "@storybook/react";
import { boldTypographyDecorator } from "../../storyDecorator";
import { NoiseOverlay } from "../NoiseOverlay";

function EffectsShowcase() {
  return (
    <div className="space-y-12 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          NOISE TEXTURE
        </h2>
        <div className="relative border border-[var(--color-border)] p-8 overflow-hidden h-48 flex items-center justify-center">
          <p className="text-2xl font-bold uppercase tracking-tight z-10">
            SUBTLE PRINT GRAIN
          </p>
          <NoiseOverlay />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          TYPOGRAPHIC LAYERING
        </h2>
        <div className="relative border border-[var(--color-border)] p-8 overflow-hidden h-64 flex items-end">
          <div
            aria-hidden="true"
            className="absolute top-0 right-4 text-[10rem] font-bold leading-none text-[var(--color-surface-3)] opacity-50 select-none tracking-tighter"
          >
            01
          </div>
          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
              FEATURE
            </span>
            <h3 className="text-3xl font-bold uppercase tracking-tight mt-2">
              DECORATIVE SCALE
            </h3>
            <p className="text-base text-[var(--color-text-secondary)] mt-1 leading-relaxed">
              Oversized numbers at 10rem create graphic depth layers.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          ACCENT BARS
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-16 bg-[var(--color-accent)]" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              SHORT ACCENT
            </span>
          </div>
          <div className="h-px w-full bg-[var(--color-border)]" />
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-32 bg-[var(--color-accent)]" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              LONG ACCENT
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          FULL-WIDTH DIVIDERS
        </h2>
        <div className="flex flex-col gap-6">
          <div className="h-px w-full bg-[var(--color-border)]" />
          <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
            Hairline dividers separate content sections in the editorial layout.
          </p>
          <div className="h-px w-full bg-[var(--color-border)]" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          TYPE SCALE CONTRAST
        </h2>
        <div className="flex gap-0">
          <div className="bg-[var(--color-surface-0)] border border-[var(--color-border)] p-8 flex-1">
            <span className="text-7xl font-extrabold tracking-[-0.06em] text-[var(--color-text-primary)]">
              Aa
            </span>
            <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mt-2">
              DISPLAY
            </p>
          </div>
          <div className="bg-[var(--color-accent)] p-8 flex-1 flex flex-col justify-center">
            <span className="text-3xl font-bold tracking-tight text-[var(--color-text-inverse)]">
              ACCENT
            </span>
          </div>
          <div className="bg-[var(--color-text-primary)] p-8 flex-1 flex flex-col justify-center">
            <span className="text-xs tracking-[0.1em] uppercase font-semibold text-[var(--color-text-inverse)]">
              LABEL TEXT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Bold Typography/Foundation/Effects",
  component: EffectsShowcase,
  decorators: [boldTypographyDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof EffectsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
