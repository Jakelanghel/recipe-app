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
      <img src={images.search} alt="Search img" onClick={handleSearch} />
      <label htmlFor="searchInput"></label>
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
