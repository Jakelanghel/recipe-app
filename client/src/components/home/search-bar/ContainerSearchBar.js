import styled from "styled-components";

export const ContainerSearchBar = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  margin-bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  border-radius: 5px;

  label {
    font-size: 3rem;
  }

  button {
    background-color: transparent;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 0.75rem;
    background-color: ${({ theme }) => theme.primaryTxt};
  }

  img {
    width: 15px;
    margin-left: auto;
    filter: invert(95%) sepia(0%) saturate(18%) hue-rotate(316deg)
      brightness(101%) contrast(110%);
  }

  input {
    width: 100%;
    border: none;
    padding: 0.75rem 0;
    padding-left: 0.75rem;
    font-size: 1rem;
    border-radius: 5px;
  }
`;
