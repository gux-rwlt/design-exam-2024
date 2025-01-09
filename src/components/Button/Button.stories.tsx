import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { PlusIcon } from "../Icons";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "ボタン",
  },
};

export const Basic: Story = {
  args: {
    variant: "basic",
    children: "ボタン",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    isDisabled: true,
    children: "ボタン",
  },
};

export const WidthAndHeight: Story = {
  args: {
    variant: "primary",
    width: "500px",
    height: "200px",
    children: "ボタン",
  },
};

export const LeadingIcon: Story = {
  args: {
    variant: "primary",
    icon: <PlusIcon />,
    children: "ボタン",
  },
};

export const OnlyIcon: Story = {
  args: {
    variant: "basic",
    icon: <PlusIcon />,
  },
};
