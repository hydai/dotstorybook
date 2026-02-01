import type { Meta, StoryObj } from "@storybook/react";
import { Win95Window } from "./Win95Window";
import { retroDecorator } from "../../storyDecorator";

const meta = {
  title: "Retro/Components/Win95Window",
  component: Win95Window,
  decorators: [retroDecorator],
  argTypes: {
    showButtons: { control: "boolean" },
    contentBg: {
      control: "select",
      options: ["white", "yellow"],
    },
  },
} satisfies Meta<typeof Win95Window>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "My Computer",
    children: (
      <div className="space-y-2 text-sm font-[var(--font-body)]">
        <p>3 1/2 Floppy (A:)</p>
        <p>Local Disk (C:)</p>
        <p>CD-ROM Drive (D:)</p>
        <p>Control Panel</p>
        <p>Printers</p>
      </div>
    ),
  },
};

export const YellowBackground: Story = {
  args: {
    title: "Notepad - README.TXT",
    contentBg: "yellow",
    children: (
      <div className="text-sm font-[var(--font-mono)] whitespace-pre-wrap">
        {`Welcome to my awesome homepage!

TODO:
- Add more animated GIFs
- Fix the guestbook
- Update visitor counter
- Add MIDI background music`}
      </div>
    ),
  },
};

export const NoButtons: Story = {
  args: {
    title: "System Information",
    showButtons: false,
    children: (
      <div className="text-sm font-[var(--font-body)] space-y-1">
        <p>Microsoft Windows 95</p>
        <p>Version 4.00.950 B</p>
        <p>RAM: 16 MB</p>
        <p>CPU: Intel Pentium 133 MHz</p>
      </div>
    ),
  },
};
