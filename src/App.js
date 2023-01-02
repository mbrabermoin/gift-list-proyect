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
    <Inputs update={false} item={{ name: "", quantity: 0, image: "" }}></Inputs>
  );

  const submitHandler = (text, quantity, image) => {
    if (list.filter((e) => e.name === text).length > 0) {
      alert("Another item with the same name is already on the list.");
    } else {
      localStorage.setItem(
        "lista",
        JSON.stringify([
          ...list,
          { name: text, quantity: quantity, image: image },
        ])
      );
      setList([...list, { name: text, quantity: quantity, image: image }]);
    }
  };
  const updateHandler = (oldName, name, quantity, image) => {
    var newlist = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].name === oldName) {
        newlist.push({ name: name, quantity: quantity, image: image });
      } else {
        newlist.push({
          name: list[i].name,
          quantity: list[i].quantity,
          image: list[i].image,
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
        item={{ name: "", quantity: 0, image: "" }}
      ></Inputs>
    );
  };
  const user = {
    name: "Matias",
    surename: "Doe",
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
        <Header user={user}></Header>
        {input}
        <StyledDivListContainer>
          <StyledUlList>
            {list.length > 0 &&
              list.map((item, index) => {
                console.log(item);
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
