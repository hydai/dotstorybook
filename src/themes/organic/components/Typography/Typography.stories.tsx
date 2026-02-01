import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { organicDecorator } from "../../storyDecorator";

const meta = {
  title: "Organic/Components/Typography",
  component: Typography,
  decorators: [organicDecorator],
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
  args: { children: "Rooted in Nature", variant: "display" },
};

export const Heading1: Story = {
  args: { children: "The Garden Awakens", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "Seasonal Harvest", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "Earthy Foundations", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "Every leaf speaks bliss to me, fluttering from the autumn tree. The beauty of natural imperfection guides our design philosophy.",
    variant: "body",
  },
};

export const BodySmall: Story = {
  args: {
    children: "Grown with care, harvested with intention.",
    variant: "body-sm",
  },
};

export const Label: Story = {
  args: { children: "Origin & Process", variant: "label" },
};

export const Caption: Story = {
  args: { children: "Hand-picked, sun-dried, naturally preserved", variant: "caption" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Typography variant="display">Rooted in Nature</Typography>
      <Typography variant="h1">The Garden Awakens</Typography>
      <Typography variant="h2">Seasonal Harvest</Typography>
      <Typography variant="h3">Earthy Foundations</Typography>
      <Typography variant="body">
        Every leaf speaks bliss to me, fluttering from the autumn tree. The
        beauty of natural imperfection guides our design philosophy.
      </Typography>
      <Typography variant="body-sm">
        Grown with care, harvested with intention.
      </Typography>
      <Typography variant="label">Origin & Process</Typography>
      <Typography variant="caption">
        Hand-picked, sun-dried, naturally preserved
      </Typography>
      <Typography variant="body" muted>
        This is muted body text for secondary information.
      </Typography>
    </div>
  ),
};
