import type { Meta, StoryObj } from "@storybook/react";
import { ClayOrb } from "./ClayOrb";
import { clayDecorator } from "../../storyDecorator";

const meta = {
  title: "Clay/Components/ClayOrb",
  component: ClayOrb,
  decorators: [clayDecorator],
  argTypes: {
    color: {
      control: "select",
      options: ["violet", "pink", "sky", "emerald", "amber"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    breathe: { control: "boolean" },
  },
} satisfies Meta<typeof ClayOrb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "42", color: "violet" },
};

export const AllColors: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-6 items-center flex-wrap">
      <ClayOrb color="violet" size="lg">
        42
      </ClayOrb>
      <ClayOrb color="pink" size="lg">
        87
      </ClayOrb>
      <ClayOrb color="sky" size="lg">
        15
      </ClayOrb>
      <ClayOrb color="emerald" size="lg">
        63
      </ClayOrb>
      <ClayOrb color="amber" size="lg">
        99
      </ClayOrb>
    </div>
  ),
};

export const AllSizes: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex gap-6 items-center">
      <ClayOrb color="violet" size="sm">
        S
      </ClayOrb>
      <ClayOrb color="violet" size="md">
        M
      </ClayOrb>
      <ClayOrb color="violet" size="lg">
        L
      </ClayOrb>
    </div>
  ),
};

export const StatOrbs: Story = {
  args: { children: "Stats" },
  render: () => (
    <div className="flex gap-8 items-end">
      <div className="flex flex-col items-center gap-3">
        <ClayOrb color="violet" size="lg">
          128
        </ClayOrb>
        <span className="text-sm font-medium text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Projects
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <ClayOrb color="pink" size="lg">
          4.9
        </ClayOrb>
        <span className="text-sm font-medium text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Rating
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <ClayOrb color="sky" size="lg">
          99%
        </ClayOrb>
        <span className="text-sm font-medium text-[var(--color-text-secondary)] font-[var(--font-body)]">
          Uptime
        </span>
      </div>
    </div>
  ),
};
