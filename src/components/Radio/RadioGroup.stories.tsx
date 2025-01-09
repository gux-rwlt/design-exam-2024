import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from ".";

const meta = {
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "value2",
  },
  render: (arg) => {
    return (
      <RadioGroup {...arg}>
        <Radio value="value1">Radio1</Radio>
        <Radio value="value2">Radio2</Radio>
        <Radio value="value3">Radio3</Radio>
      </RadioGroup>
    );
  },
};

export const Controlled: Story = {
  args: {
    value: "value2",
  },
  render: (arg) => {
    return (
      <RadioGroup {...arg}>
        <Radio value="value1">Radio1</Radio>
        <Radio value="value2">Radio2</Radio>
        <Radio value="value3">Radio3</Radio>
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "value2",
    isDisabled: true,
  },
  render: (arg) => {
    return (
      <RadioGroup {...arg}>
        <Radio value="value1">Radio1</Radio>
        <Radio value="value2">Radio2</Radio>
        <Radio value="value3">Radio3</Radio>
      </RadioGroup>
    );
  },
};
