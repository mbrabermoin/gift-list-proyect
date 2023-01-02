import React from "react";
import Textfield from "./Textfield";

export default {
  title: "Example/Textfield",
  component: Textfield,
};

const onKeyPress = () => {
  console.log("On Key Press Action");
};

const Template = (args) => <Textfield {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  id: "id",
  label: "Label",
  variant: "standard",
  initialValue: "initial value",
  onKeyPress: onKeyPress,
};

export const Numeric = Template.bind({});
Numeric.args = {
  id: "id",
  label: "Quantity",
  variant: "standard",
  initialValue: 0,
  type: "number",
  onKeyPress: onKeyPress,
};
