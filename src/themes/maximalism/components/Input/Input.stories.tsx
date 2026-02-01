import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { maximalismDecorator } from "../../storyDecorator";

const meta = {
  title: "Maximalism/Components/Input",
  component: Input,
  decorators: [maximalismDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type something wild...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Your Name",
    placeholder: "Enter your awesome name",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    defaultValue: "not-an-email",
    error: "That's not a valid email!",
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked",
    defaultValue: "Can't touch this",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: { placeholder: "All" },
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input placeholder="Type something wild..." />
      <Input label="Your Name" placeholder="Enter your awesome name" />
      <Input label="Email" defaultValue="not-an-email" error="That's not a valid email!" />
      <Input label="Locked" defaultValue="Can't touch this" disabled />
    </div>
  ),
};
