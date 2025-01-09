import type { Meta, StoryObj } from "@storybook/react";
import { ItemCounter } from "./ItemCounter";

const meta = {
  component: ItemCounter,
  tags: ["autodocs"],
  args: {
    count: 99,
  },
} satisfies Meta<typeof ItemCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
