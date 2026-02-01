import type { Meta, StoryObj } from "@storybook/react";
import { OrbitalHero } from "./OrbitalHero";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/OrbitalHero",
  component: OrbitalHero,
  decorators: [cryptoDecorator],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof OrbitalHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "The Future of Finance",
    subtitle:
      "Build the next generation of decentralized applications on the most secure and trusted blockchain platform.",
    stats: [
      { label: "TVL", value: "$4.2B" },
      { label: "Users", value: "1.2M" },
      { label: "APY", value: "12.4%" },
      { label: "Chains", value: "8" },
    ],
  },
};

export const Minimal: Story = {
  args: {
    title: "Decentralized Exchange",
    subtitle: "Trade any token with zero slippage.",
  },
};

export const WithStats: Story = {
  args: {
    title: "Protocol Dashboard",
    stats: [
      { label: "Block Height", value: "824,561" },
      { label: "Gas", value: "12 Gwei" },
    ],
  },
};
