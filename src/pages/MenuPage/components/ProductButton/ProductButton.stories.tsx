import type { Meta, StoryObj } from "@storybook/react";
import { ProductButton } from "./ProductButton";
import sampleProductImage from "@/assets/sample-product-image.jpg"; // Ensure this path is correct

const meta = {
  component: ProductButton,
  tags: ["autodocs"],
  args: {
    imageUrl: sampleProductImage,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 3.9,
  },
} satisfies Meta<typeof ProductButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
