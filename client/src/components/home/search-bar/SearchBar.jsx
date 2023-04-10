import React, { useRef } from "react";
import { Context } from "../../../Context";
import { images } from "../../../constants/images";
import { ContainerSearchBar } from "./ContainerSearchBar";
import { handleSearch } from "./handleSearch";

const SearchBar = () => {
  const { setRecipeData } = React.useContext(Context);

  const inputRef = useRef();

  return (
    <ContainerSearchBar>
      <label htmlFor="searchInput"></label>
      <button onClick={() => handleSearch(setRecipeData, inputRef)}>
        <img src={images.search} alt="Search img" />
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
