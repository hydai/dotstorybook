import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { botanicalDecorator } from "../../storyDecorator";

const meta = {
  title: "Botanical/Components/Typography",
  component: Typography,
  decorators: [botanicalDecorator],
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
  args: { variant: "display", children: "Bloom" },
};

export const H1: Story = {
  args: { variant: "h1", children: "The Garden Path" },
};

export const H2: Story = {
  args: { variant: "h2", children: "Native Wildflowers" },
};

export const H3: Story = {
  args: { variant: "h3", children: "Seasonal Planting Guide" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "The garden unfolds through seasons, each bringing its own palette of color and texture. From the first snowdrops of February to the golden asters of autumn, every bloom tells its story in the language of petals and stems.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "SPRING COLLECTION 2024" },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Photographed in the Cotswold meadows",
    muted: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All Variants" },
  render: () => (
    <div className="space-y-6 max-w-xl">
      <Typography variant="display">Bloom</Typography>
      <Typography variant="h1">The Garden Path</Typography>
      <Typography variant="h2">Native Wildflowers</Typography>
      <Typography variant="h3">Seasonal Planting Guide</Typography>
      <Typography variant="body">
        The garden unfolds through seasons, each bringing its own palette of
        color and texture. From the first snowdrops of February to the golden
        asters of autumn, every bloom tells its story in the language of petals
        and stems.
      </Typography>
      <Typography variant="body-sm">
        Each variety has been carefully selected for its resilience and beauty,
        thriving in the temperate climate of these rolling hills.
      </Typography>
      <Typography variant="label">SPRING COLLECTION 2024</Typography>
      <Typography variant="caption" muted>
        Photographed in the Cotswold meadows
      </Typography>
    </div>
  ),
};
