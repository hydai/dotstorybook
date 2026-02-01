import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { vaporwaveDecorator } from "../../storyDecorator";

const meta = {
  title: "Vaporwave/Components/Input",
  component: Input,
  decorators: [vaporwaveDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter frequency...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "CALLSIGN",
    placeholder: "vapor_rider_88",
  },
};

export const WithError: Story = {
  args: {
    label: "FREQUENCY",
    placeholder: "Enter freq",
    error: "Signal not found on this band",
    defaultValue: "404.00 MHz",
  },
};

export const Disabled: Story = {
  args: {
    label: "LOCKED CHANNEL",
    placeholder: "Restricted",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: { placeholder: "All" },
  render: () => (
    <div className="space-y-6 max-w-sm">
      <Input placeholder="Enter frequency..." />
      <Input label="CALLSIGN" placeholder="vapor_rider_88" />
      <Input
        label="FREQUENCY"
        error="Signal not found on this band"
        defaultValue="404.00 MHz"
      />
      <Input label="LOCKED CHANNEL" placeholder="Restricted" disabled />
    </div>
  ),
};
