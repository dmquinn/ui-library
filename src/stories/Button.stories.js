import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "black",
  color: "white",
  size: "md",
  label: "Press Me",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "white",
  background:
    "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(67,67,107,1) 57%, rgba(0,212,255,1) 100%)",
  size: "md",
  label: "Press Me",
};

// export const Small = Template.bind({});
// Red.args = {
//   backgroundColor: "red",
//   size: "sm",
//   label: "Press Me",
// };
// export const Large = Template.bind({});
// Red.args = {
//   backgroundColor: "red",
//   size: "lg",
//   label: "Press Me",
// };
// export const LongLabel = Template.bind({});
// Red.args = {
//   backgroundColor: "red",
//   size: "md",
//   label: "Press Me asdasdasdadwefrgrgthyhy",
// };
