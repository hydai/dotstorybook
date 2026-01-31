import type { Meta, StoryObj } from "@storybook/react";
import { kineticDecorator } from "../../storyDecorator";
import { MarqueeText } from "../MarqueeText";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 w-full max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          MARQUEE — FAST
        </h2>
        <MarqueeText speed="fast">
          <div className="flex items-center gap-8 px-4 py-2">
            <span className="text-3xl font-bold uppercase tracking-tighter">
              KINETIC TYPOGRAPHY
            </span>
            <span className="text-3xl opacity-30">*</span>
            <span className="text-3xl font-bold uppercase tracking-tighter">
              MOTION IS RHYTHM
            </span>
            <span className="text-3xl opacity-30">*</span>
          </div>
        </MarqueeText>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          MARQUEE — ACCENT
        </h2>
        <MarqueeText speed="fast" accentBg>
          <div className="flex items-center gap-8 px-4 py-3">
            <span className="text-4xl font-bold uppercase tracking-tighter">
              BOLD
            </span>
            <span className="text-4xl opacity-40">+</span>
            <span className="text-4xl font-bold uppercase tracking-tighter">
              BRUTALIST
            </span>
            <span className="text-4xl opacity-40">+</span>
          </div>
        </MarqueeText>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          HOVER SCALE
        </h2>
        <div className="flex gap-4 items-center">
          <div className="border-2 border-[var(--color-border)] p-6 text-center transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
            <span className="text-xl font-bold uppercase tracking-tighter">
              SCALE 1.05
            </span>
          </div>
          <div className="bg-[var(--color-accent)] text-[var(--color-text-inverse)] p-6 text-center transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
            <span className="text-xl font-bold uppercase tracking-tighter">
              TAP 0.95
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tighter">
          COLOR INVERSION
        </h2>
        <div className="group border-2 border-[var(--color-border)] p-8 transition-all duration-300 hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] cursor-pointer">
          <h3 className="text-3xl font-bold uppercase tracking-tighter transition-colors duration-300 group-hover:text-[var(--color-text-inverse)]">
            HOVER FOR INVERSION
          </h3>
          <p className="text-base text-[var(--color-text-secondary)] mt-2 transition-colors duration-300 group-hover:text-[var(--color-text-inverse)]">
            Background floods with accent color, text inverts to black.
          </p>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Kinetic/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [kineticDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
