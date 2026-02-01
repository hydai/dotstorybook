import type { Meta, StoryObj } from "@storybook/react";
import { DropCap } from "./DropCap";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/DropCap",
  component: DropCap,
  decorators: [academiaDecorator],
  argTypes: {
    animated: { control: "boolean" },
  },
} satisfies Meta<typeof DropCap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "In the beginning was the Word, and the Word was with the pursuit of knowledge. The great scholars of antiquity devoted their lives to understanding the natural world, cataloguing the stars, and preserving the wisdom of those who came before them.",
  },
};

export const Animated: Story = {
  args: {
    animated: true,
    children:
      "Through careful observation and rigorous inquiry, the philosophers of the Enlightenment transformed our understanding of the cosmos. Their meticulous records, preserved in the great libraries, continue to illuminate the path of discovery.",
  },
};

export const ShortText: Story = {
  args: {
    children:
      "Quod erat demonstrandum. The proof is thus complete and irrefutable.",
  },
};
