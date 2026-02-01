import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/Input",
  component: Input,
  decorators: [retroDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type here...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your name",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    value: "not-an-email",
    error: "ERROR: Invalid email address!",
  },
};

export const Disabled: Story = {
  args: {
    label: "System",
    value: "Windows 95",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: { placeholder: "All" },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input placeholder="Default input" />
      <Input label="Username" placeholder="Enter your name" />
      <Input
        label="Email"
        value="not-an-email"
        error="ERROR: Invalid email address!"
      />
      <Input label="System" value="Windows 95" disabled />
    </div>
  ),
};
