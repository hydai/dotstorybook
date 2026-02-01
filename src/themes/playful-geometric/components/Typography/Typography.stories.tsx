import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { playfulGeometricDecorator } from "../../storyDecorator";

const meta = {
  title: "Playful Geometric/Components/Typography",
  component: Typography,
  decorators: [playfulGeometricDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "body", "body-lg", "label", "caption"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display", children: "Play!" },
};

export const Heading1: Story = {
  args: { variant: "h1", children: "Heading One" },
};

export const Heading2: Story = {
  args: { variant: "h2", children: "Heading Two" },
};

export const Heading3: Story = {
  args: { variant: "h3", children: "Heading Three" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Memphis design is known for its bold colors, geometric shapes, and playful patterns.",
  },
};

export const BodyLarge: Story = {
  args: {
    variant: "body-lg",
    children:
      "This is larger body text with relaxed leading for comfortable reading.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "Label Text" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <Typography variant="display">Display</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body-lg">
        Body Large — Memphis design emerged in the early 1980s in Milan, Italy.
      </Typography>
      <Typography variant="body">
        Body — The Memphis Group used bold colors, geometric shapes, and unconventional patterns to challenge the modernist ideals of "good taste."
      </Typography>
      <Typography variant="label">Label Text</Typography>
      <Typography variant="caption">Caption — small supporting text</Typography>
    </div>
  ),
};
