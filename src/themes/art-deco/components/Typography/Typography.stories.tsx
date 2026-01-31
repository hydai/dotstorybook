import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/Typography",
  component: Typography,
  decorators: [artDecoDecorator],
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
  args: { variant: "display", children: "GATSBY" },
};

export const H1: Story = {
  args: { variant: "h1", children: "THE GRAND BALLROOM" },
};

export const H2: Story = {
  args: { variant: "h2", children: "AN EVENING OF ELEGANCE" },
};

export const H3: Story = {
  args: { variant: "h3", children: "CHAMPAGNE RECEPTION" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "The Art Deco movement celebrated bold geometry, rich materials, and the machine age. Every surface was an opportunity for ornamentation.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "INVITATION ONLY" },
};

export const AllVariants: Story = {
  args: { children: "All Variants" },
  render: () => (
    <div className="space-y-6 max-w-xl">
      <Typography variant="display">GATSBY</Typography>
      <Typography variant="h1">THE GRAND BALLROOM</Typography>
      <Typography variant="h2">AN EVENING OF ELEGANCE</Typography>
      <Typography variant="h3">CHAMPAGNE RECEPTION</Typography>
      <Typography variant="body">
        The Art Deco movement celebrated bold geometry, rich materials, and the
        machine age. Every surface was an opportunity for ornamentation.
      </Typography>
      <Typography variant="body-sm">
        Small body text for secondary information and fine details.
      </Typography>
      <Typography variant="label">INVITATION ONLY</Typography>
      <Typography variant="caption" muted>
        Caption text — supplementary details
      </Typography>
    </div>
  ),
};
