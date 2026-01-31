import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Linear Modern/Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "body", "body-sm", "label", "caption"],
    },
    muted: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { variant: "display", children: "Display Heading" },
};

export const H1: Story = {
  args: { variant: "h1", children: "Heading 1" },
};

export const H2: Story = {
  args: { variant: "h2", children: "Heading 2" },
};

export const H3: Story = {
  args: { variant: "h3", children: "Heading 3" },
};

export const Body: Story = {
  args: {
    variant: "body",
    children:
      "Body text for regular content. This is the default text style used for paragraphs and general content throughout the interface.",
  },
};

export const Label: Story = {
  args: { variant: "label", children: "Label Text" },
};

export const AllVariants: Story = {
  args: { children: "All Variants" },
  render: () => (
    <div className="space-y-6 max-w-xl">
      <Typography variant="display">Display</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body">
        Body text — regular content for paragraphs and descriptions.
      </Typography>
      <Typography variant="body-sm">
        Small body text — secondary descriptions and metadata.
      </Typography>
      <Typography variant="label">Label Text</Typography>
      <Typography variant="caption" muted>
        Caption — muted helper text
      </Typography>
    </div>
  ),
};
