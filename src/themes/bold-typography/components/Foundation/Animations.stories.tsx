import type { Meta, StoryObj } from "@storybook/react";
import { boldTypographyDecorator } from "../../storyDecorator";
import { UnderlineLink } from "../UnderlineLink";
import { Button } from "../Button";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 w-full max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          UNDERLINE REVEAL
        </h2>
        <div className="flex gap-8 items-center">
          <UnderlineLink href="#">HOVER ME</UnderlineLink>
          <UnderlineLink href="#" active>
            ALWAYS VISIBLE
          </UnderlineLink>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          FADE IN
        </h2>
        <div className="bold-typo-fade-in border border-[var(--color-border)] p-8">
          <p className="text-xl font-semibold uppercase tracking-wider">
            THIS CONTENT FADES IN
          </p>
          <p className="text-base text-[var(--color-text-secondary)] mt-2 leading-relaxed">
            Using the fade-in-up animation with the theme's custom easing curve.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          BUTTON HOVER EFFECTS
        </h2>
        <div className="flex gap-8 items-center">
          <Button variant="primary">UNDERLINE</Button>
          <Button variant="outline">INVERT</Button>
          <Button variant="ghost">APPEAR</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 uppercase tracking-tight">
          COLOR TRANSITION
        </h2>
        <div className="group border border-[var(--color-border)] p-8 transition-all duration-300 hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] cursor-pointer">
          <h3 className="text-3xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--color-text-inverse)]">
            HOVER FOR INVERSION
          </h3>
          <p className="text-base text-[var(--color-text-secondary)] mt-2 transition-colors duration-300 group-hover:text-[var(--color-text-inverse)]">
            Background floods with vermillion, text inverts to black.
          </p>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Bold Typography/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [boldTypographyDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
