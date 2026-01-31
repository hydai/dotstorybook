import type { Meta, StoryObj } from "@storybook/react";
import { TerminalWindow } from "./TerminalWindow";
import { terminalDecorator } from "../../storyDecorator";

const meta = {
  title: "Terminal/Components/TerminalWindow",
  component: TerminalWindow,
  decorators: [terminalDecorator],
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof TerminalWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "bash",
    children: (
      <div className="space-y-1 font-mono text-sm">
        <p>
          <span className="text-[var(--color-text-muted)]">user@host:~$</span>{" "}
          ls -la
        </p>
        <p className="text-[var(--color-text-secondary)]">
          total 42
        </p>
        <p className="text-[var(--color-text-secondary)]">
          drwxr-xr-x 12 user staff 384 Jan 31 09:00 .
        </p>
        <p className="text-[var(--color-text-secondary)]">
          -rw-r--r-- 1 user staff 2048 Jan 31 08:45 config.yml
        </p>
        <p className="text-[var(--color-text-secondary)]">
          -rwxr-xr-x 1 user staff 8192 Jan 31 07:30 deploy.sh
        </p>
        <p>
          <span className="text-[var(--color-text-muted)]">user@host:~$</span>{" "}
          <span
            className="inline-block w-2 h-4 bg-[var(--color-accent)] align-middle"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </p>
      </div>
    ),
  },
};

export const WithOutput: Story = {
  args: {
    title: "system monitor",
    children: (
      <div className="space-y-2 font-mono text-xs">
        <p className="text-[var(--color-success)]">
          [INFO] System boot sequence initiated...
        </p>
        <p className="text-[var(--color-success)]">
          [INFO] Loading kernel modules... OK
        </p>
        <p className="text-[var(--color-warning)]">
          [WARN] Low memory threshold reached (87%)
        </p>
        <p className="text-[var(--color-success)]">
          [INFO] Network interface eth0: UP
        </p>
        <p className="text-[var(--color-error)]">
          [ERR ] Failed to mount /dev/sdb1
        </p>
        <p className="text-[var(--color-success)]">
          [INFO] All services started. Uptime: 0d 0h 0m 12s
        </p>
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {
    title: "new session",
    children: (
      <p>
        <span className="text-[var(--color-text-muted)]">user@host:~$</span>{" "}
        <span
          className="inline-block w-2 h-4 bg-[var(--color-accent)] align-middle"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      </p>
    ),
  },
};
