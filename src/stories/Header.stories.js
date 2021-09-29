import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "../components/Header";
export default {
  title: "Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Text = () => <Header onClick={action("clicked")}>HELLO</Header>;
const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Header",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Header",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Header",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Header",
};
