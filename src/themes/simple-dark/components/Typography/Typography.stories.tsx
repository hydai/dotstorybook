import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/Typography",
  component: Typography,
  decorators: [simpleDarkDecorator],
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
  args: { children: "Simple Dark", variant: "display" },
};

export const Heading1: Story = {
  args: { children: "Heading One", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "Heading Two", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "Heading Three", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "Body text uses Inter for optimal readability across all screen sizes. The geometric sans-serif provides a clean, modern feel.",
    variant: "body",
  },
};

export const BodySmall: Story = {
  args: {
    children: "Smaller body text for secondary content and descriptions.",
    variant: "body-sm",
  },
};

export const Label: Story = {
  args: { children: "Label Text", variant: "label" },
};

export const Caption: Story = {
  args: { children: "Caption — Updated 2 hours ago", variant: "caption" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="flex flex-col gap-4 max-w-lg">
      <Typography variant="display">Display</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body">
        Body text with Inter for comfortable reading at any size.
      </Typography>
      <Typography variant="body-sm">
        Smaller body text for supporting content.
      </Typography>
      <Typography variant="label">Label Text</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="body" muted>
        Muted body text for de-emphasized content.
      </Typography>
    </div>
  ),
};
