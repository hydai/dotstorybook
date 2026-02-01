import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { neumorphismDecorator } from "../../storyDecorator";

const meta = {
  title: "Neumorphism/Components/Typography",
  component: Typography,
  decorators: [neumorphismDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "body", "body-lg", "label"],
    },
    muted: { control: "boolean" },
    gradient: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { children: "Soft UI", variant: "display" },
};

export const DisplayGradient: Story = {
  args: {
    children: "Soft UI",
    variant: "display",
    gradient: true,
  },
};

export const Heading1: Story = {
  args: { children: "Neumorphic Design", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "Extruded Elements", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "Shadow Depth", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "Neumorphism creates depth through dual opposing shadows on a monochromatic surface. Elements appear extruded from or pressed into the same material, creating a tactile, physical interface.",
    variant: "body",
  },
};

export const Label: Story = {
  args: { children: "Active Projects", variant: "label" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Typography variant="display" gradient>
        Soft UI
      </Typography>
      <Typography variant="display">Soft UI</Typography>
      <Typography variant="h1">Neumorphic Design</Typography>
      <Typography variant="h2">Extruded Elements</Typography>
      <Typography variant="h3">Shadow Depth</Typography>
      <Typography variant="body-lg">
        Build beautiful, tactile interfaces with neumorphic design. Dual
        opposing shadows on a monochromatic surface create depth and dimension
        without borders or color contrast.
      </Typography>
      <Typography variant="body">
        Neumorphism creates depth through dual opposing shadows on a
        monochromatic surface. Elements appear extruded from or pressed into
        the same material.
      </Typography>
      <Typography variant="body" muted>
        This is muted body text for secondary content.
      </Typography>
      <Typography variant="label">Active Projects</Typography>
    </div>
  ),
};
