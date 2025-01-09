import type { Meta, StoryObj } from "@storybook/react";
import { Cart } from "./Cart";
import { CartContext, reducer } from "@/providers/CartProvider";
import { SampleCart } from "@/test/server/cart";
import React from "react";

const meta = {
  component: Cart,
  tags: ["autodocs"],
  args: {},
  render: (args) => {
    const [state, dispatch] = React.useReducer(reducer, SampleCart);

    return (
      <CartContext.Provider value={{ cart: state, cartAction: dispatch }}>
        <Cart {...args} />
      </CartContext.Provider>
    );
  },
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
