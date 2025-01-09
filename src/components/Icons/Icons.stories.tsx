import type { Meta, StoryObj } from "@storybook/react";
import {
  Icon,
  ArrowLeftIcon,
  CaretDownIcon,
  CaretUpIcon,
  CartIcon,
  CloseIcon,
  MinusIcon,
  PlusIcon,
} from "./Icons";

const meta = {
  component: Icon,
  tags: ["autodocs"],
  args: {
    size: "24px"
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const icons = [
  ArrowLeftIcon,
  CaretDownIcon,
  CaretUpIcon,
  CartIcon,
  CloseIcon,
  MinusIcon,
  PlusIcon,
];

export const IconList: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {icons.map((Icon, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}>
            <Icon key={index} {...args} />
            <span>{Icon.name}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const Color: Story = {
  args: {
    color: "#dc2626"
  },
  render: (args) => <CartIcon {...args} />
};

export const Size: Story = {
  args: {
    size: "300px"
  },
  render: (args) => <CartIcon {...args} />
};