import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { industrialDecorator } from "../../storyDecorator";

const meta = {
  title: "Industrial/Components/Typography",
  component: Typography,
  decorators: [industrialDecorator],
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
        "mono",
      ],
    },
    muted: { control: "boolean" },
    gradient: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { children: "Industrial", variant: "display" },
};

export const Heading1: Story = {
  args: { children: "System Control Panel", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "Module Configuration", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "Device Parameters", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "The industrial control interface provides real-time monitoring of all connected subsystems with neumorphic visual indicators.",
    variant: "body",
  },
};

export const Label: Story = {
  args: { children: "Serial Number", variant: "label" },
};

export const Mono: Story = {
  args: { children: "IND-7742-X // STATUS: OPERATIONAL", variant: "mono" },
};

export const Gradient: Story = {
  args: {
    children: "Brushed Metal",
    variant: "display",
    gradient: true,
  },
};

export const AllVariants: Story = {
  args: { children: "Text" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-xl">
      <Typography variant="display">Display</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body">
        Body text for paragraphs and general content. The industrial theme uses
        Inter for body copy with clean, readable proportions.
      </Typography>
      <Typography variant="body-sm">
        Smaller body text for secondary information.
      </Typography>
      <Typography variant="label">Label Text</Typography>
      <Typography variant="mono">MONO: 0xDEADBEEF</Typography>
      <Typography variant="display" gradient>
        Brushed Metal Gradient
      </Typography>
      <Typography variant="body" muted>
        Muted text for less prominent content.
      </Typography>
    </div>
  ),
};
