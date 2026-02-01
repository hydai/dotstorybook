import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { cryptoDecorator } from "../../storyDecorator";

const meta = {
  title: "Crypto/Components/Input",
  component: Input,
  decorators: [cryptoDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Wallet Address",
    placeholder: "0x...",
  },
};

export const WithValue: Story = {
  args: {
    label: "Amount",
    defaultValue: "0.5 BTC",
  },
};

export const WithError: Story = {
  args: {
    label: "Amount",
    defaultValue: "-1",
    error: "Amount must be positive",
  },
};

export const Disabled: Story = {
  args: {
    label: "Network",
    defaultValue: "Mainnet",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: { placeholder: "All" },
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input label="Wallet Address" placeholder="0x..." />
      <Input label="Amount" defaultValue="0.5 BTC" />
      <Input label="Amount" defaultValue="-1" error="Amount must be positive" />
      <Input label="Network" defaultValue="Mainnet" disabled />
    </div>
  ),
};
