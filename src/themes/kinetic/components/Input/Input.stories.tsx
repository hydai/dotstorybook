import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { kineticDecorator } from "../../storyDecorator";

const meta = {
  title: "Kinetic/Components/Input",
  component: Input,
  decorators: [kineticDecorator],
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
    placeholder: "YOUR EMAIL",
  },
};

export const WithLabel: Story = {
  args: {
    label: "EMAIL ADDRESS",
    placeholder: "HELLO@EXAMPLE.COM",
  },
};

export const WithError: Story = {
  args: {
    label: "EMAIL",
    placeholder: "HELLO@EXAMPLE.COM",
    error: "INVALID EMAIL ADDRESS",
    defaultValue: "NOT-AN-EMAIL",
  },
};

export const Disabled: Story = {
  args: {
    label: "LOCKED FIELD",
    placeholder: "UNAVAILABLE",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      <Input label="NAME" placeholder="YOUR NAME" />
      <Input label="EMAIL" placeholder="HELLO@EXAMPLE.COM" />
      <Input
        label="ERROR STATE"
        error="REQUIRED FIELD"
        defaultValue="..."
      />
      <Input label="DISABLED" placeholder="UNAVAILABLE" disabled />
    </div>
  ),
};
