import "./App.css";
import Inputs from "./components/Inputs/Inputs.js";
import { useState } from "react";
import Context from "./context";
import ItemCard from "./components/ItemCard/ItemCard.js";
import Header from "./components/Header/Header.js";
import {
  StyledDivApp,
  StyledDivListContainer,
  StyledUlList,
} from "./App.styled.js";

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("lista")));
  const [input, setInput] = useState(
    <Inputs
      update={false}
      item={{ item: "", quantity: 0, picture: "" }}
    ></Inputs>
  );

  const submitHandler = (text, quantity, picture) => {
    if (list.filter((e) => e.item === text).length > 0) {
      alert("Ya esta en la lista.");
    } else {
      localStorage.setItem(
        "lista",
        JSON.stringify([
          ...list,
          { item: text, quantity: quantity, picture: picture },
        ])
      );
      setList([...list, { item: text, quantity: quantity, picture: picture }]);
    }
  };
  const updateHandler = (oldItem, item, quantity, picture) => {
    var newlist = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].item === oldItem) {
        newlist.push({ item: item, quantity: quantity, picture: picture });
      } else {
        newlist.push({
          item: list[i].item,
          quantity: list[i].quantity,
          picture: list[i].picture,
        });
      }
    }
    localStorage.setItem("lista", JSON.stringify(newlist));
    setList(newlist);
  };
  const deleteHandler = (e) => {
    localStorage.setItem(
      "lista",
      JSON.stringify(list.filter((ele) => ele !== e))
    );
    setList(list.filter((ele) => ele !== e));
    addSetter();
  };
  const editSetter = (e) => {
    setInput(<Inputs update={true} item={e}></Inputs>);
  };
  const duplicateSetter = (e) => {
    setInput(<Inputs update={false} item={e}></Inputs>);
  };
  const addSetter = () => {
    setInput(
      <Inputs
        update={false}
        item={{ item: "", quantity: 0, picture: "" }}
      ></Inputs>
    );
  };
  return (
    <StyledDivApp>
      <Context.Provider
        value={{
          list,
          submitHandler,
          updateHandler,
          deleteHandler,
          editSetter,
          addSetter,
          duplicateSetter,
        }}
      >
        <Header user={"PEPE"}></Header>
        {input}
        <StyledDivListContainer>
          <StyledUlList>
            {list.length > 0 &&
              list.map((item, index) => {
                return (
                  <li data-id={index} key={index}>
                    <ItemCard index={index + 1} item={item} />
                  </li>
                );
              })}
          </StyledUlList>
        </StyledDivListContainer>
      </Context.Provider>
    </StyledDivApp>
  );
}

export default App;
