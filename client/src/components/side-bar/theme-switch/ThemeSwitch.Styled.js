import styled from "styled-components";

export const StyledThemeSwitch = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: 3rem;

  .container-options {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 0.5rem;
  }

  button {
    font-size: 1rem;
    text-transform: capitalize;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.primaryTxt};
  }

  .slider {
    width: 75px;
    height: 35px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.primaryTxt};
    display: flex;
    align-items: center;
    padding: 5px;
    margin-left: 0.5rem;
  }

  .thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primaryBG};
  }

  .dark-mode {
    margin-left: auto;
  }
`;
