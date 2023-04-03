import React, { useEffect } from "react";
import { StyledSortBtns } from "./SortBtns.Styled";

const SortBtns = (props) => {
  const { handleSort } = props;

  return (
    <StyledSortBtns>
      <h2>Sort by</h2>

      <div className="container-btns">
        <button className="sort-btn" onClick={(e) => handleSort(e)}>
          favorites
        </button>
        <button className="sort-btn" onClick={(e) => handleSort(e)}>
          cook time
        </button>
        <button className="sort-btn" onClick={(e) => handleSort(e)}>
          category
        </button>
      </div>
    </StyledSortBtns>
  );
};

export default SortBtns;
