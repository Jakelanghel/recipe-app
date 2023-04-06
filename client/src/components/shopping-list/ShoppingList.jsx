import React, { useRef } from "react";
import { StyledShoppingList } from "./ShoppingList.Styled";

const ShoppingList = () => {
  const inputRef = useRef();

  const addToList = () => {
    const item = inputRef.current.value;
    const listItem = document.createElement("li");
    listItem.textContent = item;
    const list = document.getElementById("shoppingList");
    document.getElementById("shoppingList").appendChild(listItem);
    inputRef.current.value = "";
  };
  return (
    <StyledShoppingList>
      <label htmlFor="shoppingListInput">shopping list</label>

      <div className="container-input">
        <input type="text" id="shoppingListInput" ref={inputRef} />
        <button onClick={addToList}>add</button>
      </div>

      <div className="container-shopping-list">
        <ul id="shoppingList"></ul>
      </div>
    </StyledShoppingList>
  );
};

export default ShoppingList;
