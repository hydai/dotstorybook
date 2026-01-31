import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Linear Modern/Components/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
  },
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
      <Input label="Default" placeholder="Type here..." />
      <Input label="With Value" defaultValue="hello@example.com" />
      <Input
        label="Error"
        error="This field is required"
        defaultValue="bad"
      />
      <Input label="Disabled" placeholder="Can't edit" disabled />
    </div>
  ),
};
