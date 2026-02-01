import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/Typography",
  component: Typography,
  decorators: [cyberpunkDecorator],
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
  args: { children: "NEON CITY", variant: "display" },
};

export const Heading1: Story = {
  args: { children: "SYSTEM ONLINE", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "NETWORK STATUS", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "CONNECTION ACTIVE", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "The neon-lit streets pulse with data streams flowing through fiber-optic veins beneath the asphalt.",
    variant: "body",
  },
};

export const Label: Story = {
  args: { children: "SECTOR 7-G", variant: "label" },
};

export const Caption: Story = {
  args: { children: "Last synced: 2087.03.15 // 23:47:12 UTC", variant: "caption" },
};

export const Muted: Story = {
  args: {
    children: "DISCONNECTED NODE",
    variant: "h2",
    muted: true,
  },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Typography variant="display">NEON CITY</Typography>
      <Typography variant="h1">SYSTEM ONLINE</Typography>
      <Typography variant="h2">NETWORK STATUS</Typography>
      <Typography variant="h3">CONNECTION ACTIVE</Typography>
      <Typography variant="body">
        The neon-lit streets pulse with data streams flowing through fiber-optic
        veins beneath the asphalt.
      </Typography>
      <Typography variant="body-sm">
        Uplink bandwidth: 12.4 TB/s // Latency: 0.3ms
      </Typography>
      <Typography variant="label">SECTOR 7-G</Typography>
      <Typography variant="caption">
        Last synced: 2087.03.15 // 23:47:12 UTC
      </Typography>
    </div>
  ),
};
