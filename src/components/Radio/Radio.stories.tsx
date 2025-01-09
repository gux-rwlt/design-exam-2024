import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta = {
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Radio",
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    children: "Radio",
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Radio",
  },
};
