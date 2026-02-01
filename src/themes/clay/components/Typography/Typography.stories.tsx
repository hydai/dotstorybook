import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { clayDecorator } from "../../storyDecorator";

const meta = {
  title: "Clay/Components/Typography",
  component: Typography,
  decorators: [clayDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display",
        "h1",
        "h2",
        "h3",
        "body",
        "body-lg",
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
  args: { children: "Soft & Playful", variant: "display" },
};

export const DisplayGradient: Story = {
  args: {
    children: "Soft & Playful",
    variant: "display",
    gradient: true,
  },
};

export const Heading1: Story = {
  args: { children: "Claymorphism Design", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "Tactile Interface", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "Rounded Corners", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "Claymorphism combines soft shadows, rounded shapes, and pastel colors to create a tactile, approachable interface that feels like molding digital clay.",
    variant: "body",
  },
};

export const Label: Story = {
  args: { children: "Total Projects", variant: "label" },
};

export const Mono: Story = {
  args: { children: "font-family: Nunito", variant: "mono" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Typography variant="display" gradient>
        Soft & Playful
      </Typography>
      <Typography variant="display">Soft & Playful</Typography>
      <Typography variant="h1">Claymorphism Design</Typography>
      <Typography variant="h2">Tactile Interface</Typography>
      <Typography variant="h3">Rounded Corners</Typography>
      <Typography variant="body-lg">
        Build beautiful, tactile interfaces with clay-inspired design. Soft
        shadows, rounded corners, and candy colors create an approachable
        experience.
      </Typography>
      <Typography variant="body">
        Claymorphism combines soft shadows, rounded shapes, and pastel colors to
        create a tactile, approachable interface that feels like molding digital
        clay.
      </Typography>
      <Typography variant="body" muted>
        This is muted body text for secondary content.
      </Typography>
      <Typography variant="label">Total Projects</Typography>
      <Typography variant="mono">font-family: Nunito</Typography>
    </div>
  ),
};
