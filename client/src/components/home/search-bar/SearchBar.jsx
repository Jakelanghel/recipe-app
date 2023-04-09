import React, { useRef } from "react";
import { Context } from "../../../Context";
import { images } from "../../../constants/images";
import { ContainerSearchBar } from "./ContainerSearchBar";

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
