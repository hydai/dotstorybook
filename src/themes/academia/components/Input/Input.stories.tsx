import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { academiaDecorator } from "../../storyDecorator";

const meta = {
  title: "Academia/Components/Input",
  component: Input,
  decorators: [academiaDecorator],
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
    placeholder: "Enter author name",
  },
};

export const WithLabel: Story = {
  args: {
    label: "AUTHOR NAME",
    placeholder: "Enter author name",
  },
};

export const WithError: Story = {
  args: {
    label: "CATALOG NUMBER",
    placeholder: "e.g. MS-1234",
    error: "Invalid catalog number",
    defaultValue: "not-a-number",
  },
};

export const Disabled: Story = {
  args: {
    label: "YEAR OF PUBLICATION",
    placeholder: "Not available",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Input label="AUTHOR NAME" placeholder="Enter author name" />
      <Input label="CATALOG NUMBER" defaultValue="MS-4271" />
      <Input
        label="YEAR OF PUBLICATION"
        error="This field is required"
        defaultValue=""
      />
      <Input label="RESERVED" placeholder="Not available" disabled />
    </div>
  ),
};
