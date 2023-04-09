import React, { useContext } from "react";
import { StyledSortButtons } from "./SortButtons.Styled";
import { handleSort } from "./handleSort";
import { Context } from "../../../Context";

const SortButtons = () => {
  const { setRecipeData } = React.useContext(Context);

  return (
    <StyledSortButtons>
      <h2>Sort by</h2>

      <div className="container-btns">
        <button
          className="sort-btn"
          onClick={(e) => handleSort(e, setRecipeData)}
        >
          favorites
        </button>
        <button
          className="sort-btn"
          onClick={(e) => handleSort(e, setRecipeData)}
        >
          cook time
        </button>
        <button
          className="sort-btn"
          onClick={(e) => handleSort(e, setRecipeData)}
        >
          category
        </button>
      </div>
    </StyledSortButtons>
  );
};

export default SortButtons;
