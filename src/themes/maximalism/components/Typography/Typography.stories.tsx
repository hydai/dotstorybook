import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { maximalismDecorator } from "../../storyDecorator";

const meta = {
  title: "Maximalism/Components/Typography",
  component: Typography,
  decorators: [maximalismDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "body", "body-lg", "label", "accent"],
    },
    muted: { control: "boolean" },
    gradient: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { children: "More Is More", variant: "display" },
};

export const DisplayGradient: Story = {
  args: {
    children: "More Is More",
    variant: "display",
    gradient: true,
  },
};

export const H1: Story = {
  args: { children: "Dopamine Rush", variant: "h1" },
};

export const H2: Story = {
  args: { children: "Maximum Vibes Only", variant: "h2" },
};

export const H3: Story = {
  args: { children: "Sensory Overload", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "Maximalism is about embracing excess, clashing colors, layered textures, and bold typography. There are no rules — only energy.",
    variant: "body",
  },
};

export const Label: Story = {
  args: { children: "Featured Collection", variant: "label" },
};

export const Accent: Story = {
  args: { children: "BANG!", variant: "accent" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="space-y-6 max-w-3xl">
      <Typography variant="display" gradient>More Is More</Typography>
      <Typography variant="display">More Is More</Typography>
      <Typography variant="h1">Dopamine Rush</Typography>
      <Typography variant="h2">Maximum Vibes Only</Typography>
      <Typography variant="h3">Sensory Overload</Typography>
      <Typography variant="body-lg">
        Maximalism is a full-throttle design philosophy that celebrates excess,
        clashing colors, layered patterns, and unapologetic boldness.
      </Typography>
      <Typography variant="body">
        There are no rules — only energy. Every element competes for attention
        and that's exactly the point.
      </Typography>
      <Typography variant="body" muted>
        This is muted body text for secondary content.
      </Typography>
      <Typography variant="label">Featured Collection</Typography>
      <Typography variant="accent">BANG!</Typography>
    </div>
  ),
};
