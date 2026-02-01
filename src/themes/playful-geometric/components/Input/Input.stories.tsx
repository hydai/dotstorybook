import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { playfulGeometricDecorator } from "../../storyDecorator";

const meta = {
  title: "Playful Geometric/Components/Input",
  component: Input,
  decorators: [playfulGeometricDecorator],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Your Name",
    placeholder: "Type something fun...",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Oops! That doesn't look like an email.",
    defaultValue: "not-an-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked Field",
    placeholder: "Can't edit me",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input label="Default" placeholder="Type here..." />
      <Input label="With Value" defaultValue="Hello world!" />
      <Input
        label="Error State"
        defaultValue="bad input"
        error="Something went wrong!"
      />
      <Input label="Disabled" placeholder="Can't touch this" disabled />
    </div>
  ),
};
