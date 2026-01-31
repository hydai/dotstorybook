import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { boldTypographyDecorator } from "../../storyDecorator";

const meta = {
  title: "Bold Typography/Components/Input",
  component: Input,
  decorators: [boldTypographyDecorator],
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
    placeholder: "Enter your email",
  },
};

export const WithLabel: Story = {
  args: {
    label: "EMAIL ADDRESS",
    placeholder: "hello@example.com",
  },
};

export const WithError: Story = {
  args: {
    label: "EMAIL",
    placeholder: "hello@example.com",
    error: "INVALID EMAIL ADDRESS",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "LOCKED FIELD",
    placeholder: "Unavailable",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Input label="NAME" placeholder="Your name" />
      <Input label="EMAIL" placeholder="hello@example.com" />
      <Input
        label="ERROR STATE"
        error="REQUIRED FIELD"
        defaultValue="..."
      />
      <Input label="DISABLED" placeholder="Unavailable" disabled />
    </div>
  ),
};
