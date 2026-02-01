import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { industrialDecorator } from "../../storyDecorator";

const meta = {
  title: "Industrial/Components/Input",
  component: Input,
  decorators: [industrialDecorator],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Serial Number",
    placeholder: "Enter value...",
  },
};

export const WithError: Story = {
  args: {
    label: "Pressure Level",
    value: "OVERFLOW",
    error: "Value exceeds maximum threshold",
  },
};

export const Disabled: Story = {
  args: {
    label: "Device ID",
    value: "IND-7742-X",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input label="Serial Number" placeholder="Enter value..." />
      <Input label="Pressure Level" value="OVERFLOW" error="Value exceeds maximum threshold" />
      <Input label="Device ID" value="IND-7742-X" disabled />
    </div>
  ),
};
