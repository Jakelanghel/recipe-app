import styled from "styled-components";

export const StyledNewRecipe = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
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
    border-radius: 5px;
  }

  .txt-input,
  textarea {
    padding: 0.5rem 1rem;
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

  .container-cook-time {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .num-input {
    width: 60px;
    padding: 0.25rem 0;
    padding-left: 15px;
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

  .error {
    position: absolute;
    font-size: 0.75rem;
    top: 6px;
    left: 1rem;
  }
`;
