import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { cyberpunkDecorator } from "../../storyDecorator";

const meta = {
  title: "Cyberpunk/Components/Input",
  component: Input,
  decorators: [cyberpunkDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter command...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "USERNAME",
    placeholder: "neo_runner_7",
  },
};

export const WithError: Story = {
  args: {
    label: "ACCESS CODE",
    placeholder: "Enter code",
    error: "Invalid authentication token",
    defaultValue: "XK-9920-INVALID",
  },
};

export const Disabled: Story = {
  args: {
    label: "LOCKED FIELD",
    placeholder: "Restricted",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: { placeholder: "All" },
  render: () => (
    <div className="space-y-6 max-w-sm">
      <Input placeholder="Enter command..." />
      <Input label="USERNAME" placeholder="neo_runner_7" />
      <Input
        label="ACCESS CODE"
        error="Invalid authentication token"
        defaultValue="XK-9920-INVALID"
      />
      <Input label="LOCKED FIELD" placeholder="Restricted" disabled />
    </div>
  ),
};
