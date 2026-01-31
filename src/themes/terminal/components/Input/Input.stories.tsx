import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/Input",
  component: Input,
  decorators: [terminalDecorator],
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    prompt: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "type command...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "USERNAME",
    placeholder: "enter username",
  },
};

export const WithError: Story = {
  args: {
    label: "HOST",
    placeholder: "enter hostname",
    error: "connection refused",
    defaultValue: "192.168.1.999",
  },
};

export const Disabled: Story = {
  args: {
    label: "LOCKED",
    placeholder: "access denied",
    disabled: true,
  },
};

export const CustomPrompt: Story = {
  args: {
    label: "ROOT ACCESS",
    prompt: "root@server:#",
    placeholder: "enter command",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-96">
      <Input label="DEFAULT" placeholder="type here..." />
      <Input label="WITH VALUE" defaultValue="hello world" />
      <Input
        label="ERROR STATE"
        error="command not found"
        defaultValue="asdf"
      />
      <Input label="DISABLED" placeholder="no access" disabled />
      <Input
        label="CUSTOM PROMPT"
        prompt="root@db:#"
        placeholder="sql query"
      />
    </div>
  ),
};
