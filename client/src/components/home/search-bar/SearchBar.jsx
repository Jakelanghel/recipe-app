import React, { useState, useRef } from "react";
import { ContainerSearchBar } from "./ContainerSearchBar";
import { images } from "../../../constants/images";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef();

  const handleSearch = () => {
    const search = inputRef.current.value;
    setSearchInput(search);
  };
  return (
    <ContainerSearchBar>
      <label htmlFor="searchInput"></label>
      <button>
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
