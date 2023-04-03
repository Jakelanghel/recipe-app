import styled from "styled-components";

export const StyledSortBtns = styled.div`
  margin: 1rem 0;
  text-align: center;

  .container-btns {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .sort-btn {
    border: none;
    background-color: transparent;
    font-size: 1.15rem;
    text-transform: capitalize;
  }

  .active {
    border-bottom: solid 1px black;
  }
`;
