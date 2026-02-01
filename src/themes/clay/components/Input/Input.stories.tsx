import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { clayDecorator } from "../../storyDecorator";

const meta = {
  title: "Clay/Components/Input",
  component: Input,
  decorators: [clayDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your name...",
  },
};

export const WithValue: Story = {
  args: {
    label: "Email",
    defaultValue: "hello@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    defaultValue: "123",
    error: "Password must be at least 8 characters",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    defaultValue: "clay_user",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: { placeholder: "All" },
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input label="Full Name" placeholder="Enter your name..." />
      <Input label="Email" defaultValue="hello@example.com" />
      <Input
        label="Password"
        type="password"
        defaultValue="123"
        error="Password must be at least 8 characters"
      />
      <Input label="Username" defaultValue="clay_user" disabled />
    </div>
  ),
};
