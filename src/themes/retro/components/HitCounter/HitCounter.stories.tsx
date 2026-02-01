import type { Meta, StoryObj } from "@storybook/react";
import { HitCounter } from "./HitCounter";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/HitCounter",
  component: HitCounter,
  decorators: [retroDecorator],
  argTypes: {
    count: { control: { type: "number", min: 0, max: 9999999 } },
    label: { control: "text" },
    since: { control: "text" },
  },
} satisfies Meta<typeof HitCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 1337,
    label: "Visitors",
    since: "1995",
  },
};

export const HighCount: Story = {
  args: {
    count: 9876543,
    label: "Hits",
    since: "1996",
  },
};

export const LowCount: Story = {
  args: {
    count: 7,
    label: "Visitors",
    since: "1999",
  },
};
