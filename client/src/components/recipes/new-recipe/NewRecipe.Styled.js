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

  input,
  textarea {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }

  li {
    word-wrap: break-word;
    padding: 5px;
    margin: 5px;
  }

  .container-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ingredient-btn {
    /* margin-top: 7px; */
    padding: 0.5rem 1rem;
  }

  .ingredients-list {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .instructions-input {
    width: 100%;
    min-height: 100px;
  }

  .instruction-btn {
    display: block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }

  .submit-btn {
    font-size: 1.25rem;
    width: 150px;
    padding: 0.5rem 0;
    margin: 0 auto;
  }
`;
