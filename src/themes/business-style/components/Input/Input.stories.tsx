import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { businessStyleDecorator } from "../../storyDecorator";

const meta = {
  title: "Business Style/Components/Input",
  component: Input,
  decorators: [businessStyleDecorator],
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your full name",
  },
};

export const WithValue: Story = {
  args: {
    label: "Email Address",
    defaultValue: "editor@journal.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Company",
    placeholder: "Required field",
    error: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Reference ID",
    defaultValue: "REF-2024-0891",
    disabled: true,
  },
};

export const AllStates: Story = {
  args: { label: "All" },
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input label="Full Name" placeholder="Enter your full name" />
      <Input label="Email Address" defaultValue="editor@journal.com" />
      <Input
        label="Company"
        placeholder="Required field"
        error="This field is required"
      />
      <Input label="Reference ID" defaultValue="REF-2024-0891" disabled />
    </div>
  ),
};
