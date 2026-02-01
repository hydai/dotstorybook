import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/Typography",
  component: Typography,
  decorators: [academiaDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "body",
        "body-sm",
        "label",
        "caption",
      ],
    },
    muted: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display", children: "Principia" },
};

export const H1: Story = {
  args: { variant: "h1", children: "The Natural Philosophy" },
};

export const H2: Story = {
  args: { variant: "h2", children: "On the Motion of Bodies" },
};

export const H3: Story = {
  args: { variant: "h3", children: "De Motu Corporum" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "The pursuit of knowledge is the noblest of human endeavors, illuminating the mind as a lantern illuminates the darkness. Through careful observation and rigorous inquiry, we come to understand the fundamental truths that govern our world.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "ANNO DOMINI MDCCCLXVII" },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Translated from the original Latin manuscript",
    muted: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All Variants" },
  render: () => (
    <div className="space-y-6 max-w-xl">
      <Typography variant="display">Principia</Typography>
      <Typography variant="h1">The Natural Philosophy</Typography>
      <Typography variant="h2">On the Motion of Bodies</Typography>
      <Typography variant="h3">De Motu Corporum</Typography>
      <Typography variant="body">
        The pursuit of knowledge is the noblest of human endeavors, illuminating
        the mind as a lantern illuminates the darkness. Through careful
        observation and rigorous inquiry, we come to understand the fundamental
        truths that govern our world.
      </Typography>
      <Typography variant="body-sm">
        Quod erat demonstrandum. Thus it has been shown that the principles of
        natural philosophy extend beyond mere calculation.
      </Typography>
      <Typography variant="label">ANNO DOMINI MDCCCLXVII</Typography>
      <Typography variant="caption" muted>
        Translated from the original Latin manuscript
      </Typography>
    </div>
  ),
};
