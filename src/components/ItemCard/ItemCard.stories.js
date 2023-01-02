import React from "react";
import Context from "../../context";
import ItemCard from "./ItemCard";

export default {
  title: "Example/ItemCard",
  component: ItemCard,
};

const editSetter = () => {
  console.log("Edit Setter");
};
const addSetter = () => {
  console.log("Add setter");
};
const duplicateSetter = () => {
  console.log("Duplicate Setter");
};

const Template = (args) => (
  <Context.Provider
    value={{
      editSetter,
      addSetter,
      duplicateSetter,
    }}
  >
    <ItemCard {...args} />
  </Context.Provider>
);

export const Pokemon = Template.bind({});
Pokemon.args = {
  index: 1,
  item: {
    name: "pikachu",
    quantity: 6,
    image:
      "https://www.pngplay.com/wp-content/uploads/10/Pokemon-No-Background.png",
  },
};

export const Simpsons = Template.bind({});
Simpsons.args = {
  index: 1,
  item: {
    name: "Bart Simpson",
    quantity: 1,
    image:
      "https://www.pngplay.com/wp-content/uploads/6/Bart-Simpson-Character-Background-PNG-Image.png",
  },
};
