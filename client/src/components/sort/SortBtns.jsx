import React, { useEffect } from "react";
import { StyledSortBtns } from "./SortBtns.Styled";
import { Context } from "../../Context";

const SortBtns = (props) => {
  const { handleSort } = props;

  return (
    <StyledSortBtns>
      <button onClick={(e) => handleSort(e)}>favorites</button>
      <button onClick={(e) => handleSort(e)}>cook time</button>
      <button onClick={(e) => handleSort(e)}>category</button>
    </StyledSortBtns>
  );
};

export default SortBtns;
