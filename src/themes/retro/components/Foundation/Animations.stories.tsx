import type { Meta, StoryObj } from "@storybook/react";
import { retroDecorator } from "../../storyDecorator";
import { Badge } from "../Badge";

function AnimationsShowcase() {
  return (
    <div className="space-y-12 max-w-lg">
      {/* Rainbow Text */}
      <div>
        <h2 className="text-base font-bold text-black mb-4 font-[var(--font-heading)] uppercase">
          Rainbow Text Cycling
        </h2>
        <p
          className="text-2xl font-bold font-[var(--font-heading)] uppercase"
          style={{ animation: "retro-rainbow 4s linear infinite" }}
        >
          WELCOME TO MY HOMEPAGE!!!
        </p>
        <p className="text-xs text-[#808080] mt-2 font-[var(--font-body)]">
          4s linear color cycle through RGB spectrum
        </p>
      </div>

      {/* Pulse Glow Badge */}
      <div>
        <h2 className="text-base font-bold text-black mb-4 font-[var(--font-heading)] uppercase">
          Pulse Glow Badge
        </h2>
        <div className="flex gap-4 items-center">
          <Badge variant="new">NEW!</Badge>
          <Badge variant="hot">HOT!</Badge>
        </div>
        <p className="text-xs text-[#808080] mt-2 font-[var(--font-body)]">
          1.5s pulse glow animation for attention-grabbing badges
        </p>
      </div>

      {/* Blink Effect */}
      <div>
        <h2 className="text-base font-bold text-black mb-4 font-[var(--font-heading)] uppercase">
          Blink Effect
        </h2>
        <p
          className="text-xl font-bold text-[#FF0000] font-[var(--font-heading)] uppercase"
          style={{ animation: "retro-blink 1s step-end infinite" }}
        >
          *** CLICK HERE!!! ***
        </p>
        <p className="text-xs text-[#808080] mt-2 font-[var(--font-body)]">
          1s step-end harsh blink (the &lt;blink&gt; tag experience)
        </p>
      </div>

      {/* Marquee Reference */}
      <div>
        <h2 className="text-base font-bold text-black mb-4 font-[var(--font-heading)] uppercase">
          Marquee Scrolling
        </h2>
        <p className="text-sm font-[var(--font-body)]">
          See the <strong>MarqueeBar</strong> component for authentic
          scrolling text using react-fast-marquee.
        </p>
      </div>
    </div>
  );
}

const meta = {
  title: "Retro/Foundation/Animations",
  component: AnimationsShowcase,
  decorators: [retroDecorator],
  parameters: { layout: "padded" },
} satisfies Meta<typeof AnimationsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
