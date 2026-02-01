import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/Typography",
  component: Typography,
  decorators: [businessStyleDecorator],
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
  args: { variant: "display", children: "The Quarterly Review" },
};

export const Heading1: Story = {
  args: { variant: "h1", children: "Market Outlook & Strategy" },
};

export const Heading2: Story = {
  args: { variant: "h2", children: "Sector Performance Analysis" },
};

export const Heading3: Story = {
  args: { variant: "h3", children: "Emerging Trends in Technology" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "The contemporary business landscape demands a nuanced understanding of market dynamics. Investors and analysts alike must consider the interplay between macroeconomic forces and sector-specific developments when formulating their strategies.",
  },
};

export const BodySmall: Story = {
  args: {
    variant: "body-sm",
    children:
      "Supplementary analysis suggests that smaller-cap equities may present compelling value propositions in the current cycle.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "Section Header" },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Source: Financial Times, Q4 2024",
    muted: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-xl">
      <Typography variant="display">The Quarterly Review</Typography>
      <Typography variant="h1">Market Outlook & Strategy</Typography>
      <Typography variant="h2">Sector Performance Analysis</Typography>
      <Typography variant="h3">Emerging Trends in Technology</Typography>
      <div className="border-t border-[var(--color-border)] my-2" />
      <Typography variant="label">Section Header</Typography>
      <Typography variant="body">
        The contemporary business landscape demands a nuanced understanding of
        market dynamics. Investors and analysts alike must consider the interplay
        between macroeconomic forces and sector-specific developments.
      </Typography>
      <Typography variant="body-sm">
        Supplementary analysis suggests that smaller-cap equities may present
        compelling value propositions in the current cycle.
      </Typography>
      <Typography variant="caption" muted>
        Source: Financial Times, Q4 2024
      </Typography>
    </div>
  ),
};
