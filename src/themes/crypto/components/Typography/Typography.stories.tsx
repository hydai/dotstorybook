import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/Typography",
  component: Typography,
  decorators: [cryptoDecorator],
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "body", "body-lg", "label", "mono"],
    },
    muted: { control: "boolean" },
    gradient: { control: "boolean" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  args: { children: "The Future of Finance", variant: "display" },
};

export const DisplayGradient: Story = {
  args: {
    children: "The Future of Finance",
    variant: "display",
    gradient: true,
  },
};

export const Heading1: Story = {
  args: { children: "Decentralized Exchange", variant: "h1" },
};

export const Heading2: Story = {
  args: { children: "Trade with Confidence", variant: "h2" },
};

export const Heading3: Story = {
  args: { children: "Portfolio Overview", variant: "h3" },
};

export const Body: Story = {
  args: {
    children:
      "Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.",
    variant: "body",
  },
};

export const Label: Story = {
  args: { children: "Total Value Locked", variant: "label" },
};

export const Mono: Story = {
  args: { children: "0x1a2b3c4d5e6f7890", variant: "mono" },
};

export const AllVariants: Story = {
  args: { children: "All" },
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Typography variant="display" gradient>The Future of Finance</Typography>
      <Typography variant="display">The Future of Finance</Typography>
      <Typography variant="h1">Decentralized Exchange</Typography>
      <Typography variant="h2">Trade with Confidence</Typography>
      <Typography variant="h3">Portfolio Overview</Typography>
      <Typography variant="body-lg">
        Build the next generation of decentralized applications on the most
        secure and trusted blockchain platform.
      </Typography>
      <Typography variant="body">
        Bitcoin is a decentralized digital currency that can be transferred on
        the peer-to-peer bitcoin network.
      </Typography>
      <Typography variant="body" muted>
        This is muted body text for secondary content.
      </Typography>
      <Typography variant="label">Total Value Locked</Typography>
      <Typography variant="mono">0x1a2b3c4d5e6f7890abcdef</Typography>
    </div>
  ),
};
