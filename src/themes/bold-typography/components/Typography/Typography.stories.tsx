import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { boldTypographyDecorator } from "../../storyDecorator";

const meta = {
  title: "Bold Typography/Components/Typography",
  component: Typography,
  decorators: [boldTypographyDecorator],
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
    serif: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display", children: "BOLD TYPE" },
};

export const H1: Story = {
  args: { variant: "h1", children: "HEADING ONE" },
};

export const H2: Story = {
  args: { variant: "h2", children: "HEADING TWO" },
};

export const H3: Story = {
  args: { variant: "h3", children: "HEADING THREE" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Typography is not decoration. It is the visual structure. Every letterform carries weight, every space carries meaning.",
  },
};

export const Serif: Story = {
  args: {
    variant: "h2",
    serif: true,
    children: "The art of the editorial spread lives in the tension between massive type and negative space.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "ISSUE NO. 01" },
};

export const AllVariants: Story = {
  args: { children: "All Variants" },
  render: () => (
    <div className="space-y-8 max-w-3xl">
      <Typography variant="display">DISPLAY</Typography>
      <Typography variant="h1">HEADING ONE</Typography>
      <Typography variant="h2">HEADING TWO</Typography>
      <Typography variant="h3">HEADING THREE</Typography>
      <Typography variant="body">
        Body text — generous leading for maximum readability against dark
        backgrounds. Typography drives the entire visual hierarchy.
      </Typography>
      <Typography variant="body-sm">
        Small body text — secondary descriptions and supporting content.
      </Typography>
      <Typography variant="h2" serif>
        Serif pull quote — Playfair Display italic for editorial contrast.
      </Typography>
      <Typography variant="label">ISSUE NO. 01 — LABEL</Typography>
      <Typography variant="caption" muted>
        Caption — muted metadata and timestamps
      </Typography>
    </div>
  ),
};
