import React, { useState, useRef } from "react";
import { ContainerSearchBar } from "./ContainerSearchBar";
import { images } from "../../../constants/images";
import { Context } from "../../../Context";

const SearchBar = () => {
  const { setRecipeData } = React.useContext(Context);

  const inputRef = useRef();

  const handleSearch = async () => {
    const search = inputRef.current.value;
    try {
      const response = await fetch(`/api/v1/recipes?search=${search}`);
      const data = await response.json();
      setRecipeData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ContainerSearchBar>
      <label htmlFor="searchInput"></label>
      <button onClick={handleSearch}>
        <img src={images.search} alt="Search img" onClick={handleSearch} />
      </button>
      <input
        type="text"
        placeholder="Search recipes"
        id="searchInput"
        ref={inputRef}
      />
    </ContainerSearchBar>
  );
};

export default SearchBar;
