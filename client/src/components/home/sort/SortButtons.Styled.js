import styled from "styled-components";

export const StyledSortButtons = styled.div`
  margin: 1rem 0;
  text-align: center;

  button {
    border-bottom: solid 2px ${({ theme }) => theme.primaryBG};
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 10px;
  }
`;
