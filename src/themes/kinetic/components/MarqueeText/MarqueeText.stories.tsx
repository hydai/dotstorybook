import type { Meta, StoryObj } from "@storybook/react";
import { MarqueeText } from "./MarqueeText";
import { kineticDecorator } from "../../storyDecorator";

const meta = {
  title: "Kinetic/Components/MarqueeText",
  component: MarqueeText,
  decorators: [kineticDecorator],
  argTypes: {
    speed: {
      control: "select",
      options: ["fast", "medium", "slow"],
    },
    reverse: { control: "boolean" },
    accentBg: { control: "boolean" },
  },
} satisfies Meta<typeof MarqueeText>;

export default meta;
type Story = StoryObj<typeof meta>;

const statsContent = (
  <div className="flex items-center gap-12 px-6">
    <span className="text-5xl md:text-7xl font-bold tracking-tighter">
      10K+
    </span>
    <span className="text-sm uppercase tracking-widest opacity-60">USERS</span>
    <span className="text-2xl opacity-30">/</span>
    <span className="text-5xl md:text-7xl font-bold tracking-tighter">
      99.9%
    </span>
    <span className="text-sm uppercase tracking-widest opacity-60">
      UPTIME
    </span>
    <span className="text-2xl opacity-30">/</span>
    <span className="text-5xl md:text-7xl font-bold tracking-tighter">
      &lt;50MS
    </span>
    <span className="text-sm uppercase tracking-widest opacity-60">
      LATENCY
    </span>
    <span className="text-2xl opacity-30">/</span>
  </div>
);

export const Default: Story = {
  args: {
    speed: "medium",
    children: statsContent,
  },
};

export const Fast: Story = {
  args: {
    speed: "fast",
    children: (
      <div className="flex items-center gap-8 px-4">
        <span className="text-3xl font-bold uppercase tracking-tighter">
          KINETIC TYPOGRAPHY
        </span>
        <span className="text-3xl opacity-30">*</span>
        <span className="text-3xl font-bold uppercase tracking-tighter">
          MOTION IS RHYTHM
        </span>
        <span className="text-3xl opacity-30">*</span>
        <span className="text-3xl font-bold uppercase tracking-tighter">
          NOTHING IS STILL
        </span>
        <span className="text-3xl opacity-30">*</span>
      </div>
    ),
  },
};

export const AccentBackground: Story = {
  args: {
    speed: "fast",
    accentBg: true,
    children: (
      <div className="flex items-center gap-8 px-4 py-4">
        <span className="text-4xl font-bold uppercase tracking-tighter">
          BOLD
        </span>
        <span className="text-4xl opacity-40">+</span>
        <span className="text-4xl font-bold uppercase tracking-tighter">
          BRUTALIST
        </span>
        <span className="text-4xl opacity-40">+</span>
        <span className="text-4xl font-bold uppercase tracking-tighter">
          KINETIC
        </span>
        <span className="text-4xl opacity-40">+</span>
      </div>
    ),
  },
};

export const Reversed: Story = {
  args: {
    speed: "medium",
    reverse: true,
    children: statsContent,
  },
};

export const AllVariants: Story = {
  args: { children: <span /> },
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <MarqueeText speed="fast">
        <div className="flex items-center gap-8 px-4 py-2">
          <span className="text-2xl font-bold uppercase tracking-tighter">
            FAST MARQUEE
          </span>
          <span className="text-2xl opacity-30">/</span>
          <span className="text-2xl font-bold uppercase tracking-tighter">
            HIGH ENERGY
          </span>
          <span className="text-2xl opacity-30">/</span>
        </div>
      </MarqueeText>
      <MarqueeText speed="fast" accentBg>
        <div className="flex items-center gap-8 px-4 py-3">
          <span className="text-3xl font-bold uppercase tracking-tighter">
            ACCENT MARQUEE
          </span>
          <span className="text-3xl opacity-40">*</span>
          <span className="text-3xl font-bold uppercase tracking-tighter">
            ACID YELLOW
          </span>
          <span className="text-3xl opacity-40">*</span>
        </div>
      </MarqueeText>
      <MarqueeText speed="medium" reverse>
        <div className="flex items-center gap-8 px-4 py-2">
          <span className="text-2xl font-bold uppercase tracking-tighter">
            REVERSED DIRECTION
          </span>
          <span className="text-2xl opacity-30">/</span>
          <span className="text-2xl font-bold uppercase tracking-tighter">
            COUNTER FLOW
          </span>
          <span className="text-2xl opacity-30">/</span>
        </div>
      </MarqueeText>
      <MarqueeText speed="slow">{statsContent}</MarqueeText>
    </div>
  ),
};
