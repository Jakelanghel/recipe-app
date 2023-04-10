import styled from "styled-components";

export const StyledSortButtons = styled.div`
  margin: 1rem 0;
  text-align: center;
  p {
    text-transform: capitalize;
  }

  .container-btns {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .sort-btn {
    border: none;
    background-color: transparent;
    font-size: 1.15rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.darkBlue};
    padding: 0.5rem 0.75rem;
  }

  .active {
    border-bottom: solid 2px ${({ theme }) => theme.darkBlue};
  }
`;
