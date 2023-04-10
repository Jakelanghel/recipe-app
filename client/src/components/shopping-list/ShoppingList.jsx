import React, { useState, useRef } from "react";
import { StyledShoppingList } from "./ShoppingList.Styled";

const ShoppingList = () => {
  const inputRef = useRef();
  const [items, setItems] = useState([]);

  const addToList = (event) => {
    event.preventDefault();
    setItems((oldState) => [...oldState, inputRef.current.value]);
    inputRef.current.value = "";
  };

  const shoppingListElements = (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );

  return (
    <main className="pg-padding">
      <StyledShoppingList>
        <label htmlFor="shoppingListInput">Shopping List</label>
        <form onSubmit={addToList}>
          <input type="text" id="shoppingListInput" ref={inputRef} />
          <button type="submit">Add</button>
        </form>
        <div className="container-shopping-list">{shoppingListElements}</div>
      </StyledShoppingList>
    </main>
  );
};

export default ShoppingList;
