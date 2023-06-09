import styled from "styled-components";

export const StyledNewRecipe = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
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
    font-size: 1.25rem;
    font-weight: 900;
    margin-top: 1rem;
  }

  input,
  textarea {
    font-size: 1rem;
    border-radius: 5px;
    padding: 0.5rem;
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
    align-items: center;
  }

  .ingredients {
    gap: 3rem;
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

  button {
    font-size: 1rem;
    text-transform: capitalize;
    border: none;
    background-color: ${({ theme }) => theme.primaryTxt};
    color: ${({ theme }) => theme.primaryBG};
    border: none;
    border-radius: 5px;
  }

  .back-btn {
    background-color: transparent;
  }

  @media screen and (min-width: 900px) {
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
