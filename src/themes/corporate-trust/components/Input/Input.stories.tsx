import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { corporateTrustDecorator } from "../../storyDecorator";

const meta = {
  title: "Corporate Trust/Components/Input",
  component: Input,
  decorators: [corporateTrustDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@company.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@company.com",
    value: "invalid-email",
    error: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email Address",
    placeholder: "you@company.com",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-6 max-w-sm">
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email Address" placeholder="you@company.com" />
      <Input label="Company" placeholder="Acme Inc." />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        error="Password must be at least 8 characters"
      />
      <Input label="Disabled Field" placeholder="Cannot edit" disabled />
    </div>
  ),
};
