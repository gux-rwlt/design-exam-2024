import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CatalogView } from "./CatalogView";
import { CartContext, reducer } from "@/providers/CartProvider";
import { SampleProducts } from "@/test/server/products";
import { SampleCart } from "@/test/server/cart";
import { backend, errorResolver } from "@/test/server/helper";
import { http } from "msw";

const meta = {
  component: CatalogView,
  tags: ["autodocs"],
  args: {
    data: SampleProducts,
    isLoading: false,
    error: null,
  },
  render: (args) => {
    const [state, dispatch] = React.useReducer(reducer, SampleCart);

    return (
      <CartContext.Provider value={{ cart: state, cartAction: dispatch }}>
        <CatalogView {...args} />
      </CartContext.Provider>
    );
  },
} satisfies Meta<typeof CatalogView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  render: (args) => {
    const [state, dispatch] = React.useReducer(reducer, SampleCart);
    const { worker } = window.msw;
    React.useEffect(() => () => worker.resetHandlers());

    worker.use(http.get(backend("/products"), errorResolver({ status: 400 })));

    return (
      <CartContext.Provider value={{ cart: state, cartAction: dispatch }}>
        <CatalogView {...args} />
      </CartContext.Provider>
    );
  },
};
