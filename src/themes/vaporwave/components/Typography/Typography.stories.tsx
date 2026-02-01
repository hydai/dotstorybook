import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/Typography",
  component: Typography,
  decorators: [vaporwaveDecorator],
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
  args: { children: "SUNSET DREAM", variant: "display" },
};

export const Heading1: Story = {
  args: { children: "PARADISE ONLINE", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "DIGITAL OASIS", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "SYNTHWAVE FM", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "Palm trees sway beneath a gradient sky as chrome dolphins breach the digital ocean surface.",
    variant: "body",
  },
};

export const Label: Story = {
  args: { children: "ZONE A-7", variant: "label" },
};

export const Caption: Story = {
  args: {
    children: "Last broadcast: 1987.06.21 // 19:84:00 PST",
    variant: "caption",
  },
};

export const Muted: Story = {
  args: {
    children: "OFFLINE SIGNAL",
    variant: "h2",
    muted: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Typography variant="display">SUNSET DREAM</Typography>
      <Typography variant="h1">PARADISE ONLINE</Typography>
      <Typography variant="h2">DIGITAL OASIS</Typography>
      <Typography variant="h3">SYNTHWAVE FM</Typography>
      <Typography variant="body">
        Palm trees sway beneath a gradient sky as chrome dolphins breach the
        digital ocean surface.
      </Typography>
      <Typography variant="body-sm">
        Bandwidth: 88.4 MHz // Signal: CLEAR
      </Typography>
      <Typography variant="label">ZONE A-7</Typography>
      <Typography variant="caption">
        Last broadcast: 1987.06.21 // 19:84:00 PST
      </Typography>
    </div>
  ),
};
