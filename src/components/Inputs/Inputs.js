import React, { useContext, useEffect, useState } from "react";
import Context from "../../context";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Inputs(props) {
  const [item, setItem] = useState(props.item.item);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [picture, setPicture] = useState(props.item.picture);
  const [oldItem, setOldItem] = useState(props.item.item);
  const context = useContext(Context);
  const { submitHandler } = context;
  const { updateHandler } = context;
  const { addSetter } = context;
  useEffect(() => {
    setItem(props.item.item);
    setOldItem(props.item.item);
    setQuantity(props.item.quantity);
    setPicture(props.item.picture);
  }, [props.item]);

  const changeItemHandler = (e) => {
    setItem(e.target.value);
  };
  const changePictureHandler = (e) => {
    setPicture(e.target.value);
  };
  const changeQtyHandler = (e) => {
    setQuantity(e.target.value);
  };
  const addElement = () => {
    if (item.trim() !== "" && quantity > 0) {
      submitHandler(item, quantity, picture);
      setItem("");
      setQuantity(0);
      setPicture("");
      addSetter();
    }
  };
  const updateElement = () => {
    if (item.trim() !== "" && quantity > 0) {
      updateHandler(oldItem, item, quantity, picture);
      setItem("");
      setQuantity(0);
      setPicture("");
      addSetter();
    }
  };
  const addElementEnter = (e) => {
    if (e.key === "Enter") {
      if (props.update) {
        updateElement();
      } else {
        addElement();
      }
    }
  };
  const clearInputs = () => {
    setItem("");
    setQuantity(0);
    setPicture("");
    addSetter();
  };
  return (
    <div>
      <Context.Provider value={{ item, quantity }}>
        <div>
          <div>
            <TextField
              id="item"
              onKeyPress={(e) => {
                addElementEnter(e);
              }}
              label="Item"
              variant="standard"
              value={item}
              onChange={changeItemHandler}
            />
            <TextField
              id="quantity"
              onKeyPress={(e) => {
                addElementEnter(e);
              }}
              type="number"
              label="Cantidad"
              variant="standard"
              value={quantity}
              onChange={changeQtyHandler}
            />
          </div>
          <TextField
            id="picture"
            onKeyPress={(e) => {
              addElementEnter(e);
            }}
            label="Foto URL"
            variant="standard"
            value={picture}
            onChange={changePictureHandler}
          />
        </div>
        <Button
          id="clearButton"
          variant="contained"
          color="primary"
          onClick={() => clearInputs()}
        >
          LIMPIAR
        </Button>
        {!props.update && (
          <Button
            id="addButton"
            variant="contained"
            color="primary"
            onClick={() => addElement()}
          >
            AGREGAR
          </Button>
        )}
        {props.update && (
          <Button
            id="updateButton"
            variant="contained"
            color="primary"
            onClick={() => updateElement()}
          >
            EDITAR
          </Button>
        )}
      </Context.Provider>
    </div>
  );
}
export default Inputs;
