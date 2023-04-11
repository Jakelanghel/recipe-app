import React, { useContext, useState } from "react";
import { StyledSortButtons } from "./SortButtons.Styled";
import { handleSort } from "./handleSort";
import { Context } from "../../../Context";

const SortButtons = () => {
  const { setRecipeData } = useContext(Context);
  const [activeSort, setActiveSort] = useState(null);

  const handleClick = (e, setRecipeData) => {
    handleSort(e, setRecipeData);
    setActiveSort(e.target.id);
  };

  return (
    <StyledSortButtons>
      <p>sort by</p>

      <div className="container-btns">
        <button
          className={activeSort === 0 ? "sort-btn active" : "sort-btn"}
          onClick={(e) => handleClick(e, setRecipeData)}
          id={0}
        >
          favorites
        </button>
        <button
          className={activeSort === 1 ? "sort-btn active" : "sort-btn"}
          onClick={(e) => handleClick(e, setRecipeData)}
          id={1}
        >
          cook time
        </button>
        <button
          className={activeSort === 2 ? "sort-btn active" : "sort-btn"}
          onClick={(e) => handleClick(e, setRecipeData)}
          id={2}
        >
          category
        </button>
      </div>
    </StyledSortButtons>
  );
};

export default SortButtons;
