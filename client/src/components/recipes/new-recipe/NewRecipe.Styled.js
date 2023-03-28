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
  }

  input {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .container-flex {
    display: flex;
  }
`;
