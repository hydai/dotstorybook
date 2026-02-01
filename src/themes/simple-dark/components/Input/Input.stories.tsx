import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { simpleDarkDecorator } from "../../storyDecorator";

const meta = {
  title: "Simple Dark/Components/Input",
  component: Input,
  decorators: [simpleDarkDecorator],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your email...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    error: "Please enter a valid email address",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-72">
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="you@example.com" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
      />
      <Input
        label="Invalid"
        error="This field is required"
        defaultValue=""
        placeholder="Required field"
      />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
};
