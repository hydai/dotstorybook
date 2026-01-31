import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { artDecoDecorator } from "../../storyDecorator";

const meta = {
  title: "Art Deco/Components/Input",
  component: Input,
  decorators: [artDecoDecorator],
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
    placeholder: "Enter your name",
  },
};

export const WithLabel: Story = {
  args: {
    label: "FULL NAME",
    placeholder: "Enter your name",
  },
};

export const WithError: Story = {
  args: {
    label: "EMAIL ADDRESS",
    placeholder: "Enter email",
    error: "Invalid email address",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "RESERVED",
    placeholder: "Not available",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Input label="FULL NAME" placeholder="Enter your name" />
      <Input label="WITH VALUE" defaultValue="Gatsby" />
      <Input
        label="ERROR STATE"
        error="This field is required"
        defaultValue=""
      />
      <Input label="DISABLED" placeholder="Not available" disabled />
    </div>
  ),
};
