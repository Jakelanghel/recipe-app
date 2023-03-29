import styled from "styled-components";

export const StyledNewRecipe = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  input {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    border-radius: 5px;
  }

  .container-flex {
    display: flex;
    align-items: flex-end;
  }

  .ingredients-list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;
