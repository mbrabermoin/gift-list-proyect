import React, { useContext, useEffect, useState } from "react";
import Context from "../../context";
import Button from "../Button/Button";
import TextfieldComp from "../Textfield/Textfield";
import { StyledButtonsContainer } from "./Inputs.styled";

function Inputs({ item, update }) {
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [image, setImage] = useState(item.image);
  const [oldName, setOldName] = useState(item.name);
  const context = useContext(Context);
  const { submitHandler } = context;
  const { updateHandler } = context;
  const { addSetter } = context;
  useEffect(() => {
    setName(item.name);
    setOldName(item.name);
    setQuantity(item.quantity);
    setImage(item.image);
  }, [item]);

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeImageHandler = (e) => {
    setImage(e.target.value);
  };
  const changeQtyHandler = (e) => {
    setQuantity(e.target.value);
  };
  const addElement = () => {
    if (name.trim() !== "" && quantity > 0) {
      submitHandler(name, quantity, image);
      setName("");
      setQuantity(0);
      setImage("");
      addSetter();
    }
  };
  const updateElement = () => {
    if (name.trim() !== "" && quantity > 0) {
      updateHandler(oldName, name, quantity, image);
      setName("");
      setQuantity(0);
      setImage("");
      addSetter();
    }
  };
  const addElementEnter = (e) => {
    if (e.key === "Enter") {
      if (update) {
        updateElement();
      } else {
        addElement();
      }
    }
  };
  const clearInputs = () => {
    setName("");
    setQuantity(0);
    setImage("");
    addSetter();
  };
  return (
    <div>
      <div>
        <div>
          <TextfieldComp
            id="name"
            label="Name"
            initialValue={name}
            onChange={changeNameHandler}
            onKeyPress={(e) => {
              addElementEnter(e);
            }}
          ></TextfieldComp>
          <TextfieldComp
            id="quantity"
            label="Quantity"
            initialValue={quantity}
            onChange={changeQtyHandler}
            onKeyPress={(e) => {
              addElementEnter(e);
            }}
            type="number"
          ></TextfieldComp>
        </div>
        <TextfieldComp
          id="image"
          label="Image URL"
          initialValue={image}
          onChange={changeImageHandler}
          onKeyPress={(e) => {
            addElementEnter(e);
          }}
        ></TextfieldComp>
      </div>
      <StyledButtonsContainer>
        <Button primary size="small" onClick={clearInputs} label="Clear" />

        {!update && (
          <Button primary size="small" onClick={addElement} label="Add" />
        )}
        {update && (
          <Button primary size="small" onClick={updateElement} label="Update" />
        )}
      </StyledButtonsContainer>
    </div>
  );
}
export default Inputs;
