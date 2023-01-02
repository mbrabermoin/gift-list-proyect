import React from "react";
import Inputs from "./Inputs";
import Context from "../../context";

export default {
  title: "Example/Inputs",
  component: Inputs,
};

const addElement = () => {
  console.log("Add Element");
};
const updateElement = () => {
  console.log("Update Element");
};
const submitHandler = () => {
  console.log("Submit Handler");
};
const addSetter = () => {
  console.log("Add Setter");
};

const Template = (args) => (
  <Context.Provider
    value={{
      addElement,
      updateElement,
      submitHandler,
      addSetter,
    }}
  >
    <Inputs {...args} />
  </Context.Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    item: "item name",
    quantity: 3,
    image: "Image",
  },
};
