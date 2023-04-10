import styled from "styled-components";

export const StyledRecipePreview = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
  text-align: center;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  img {
    width: 45px;
    margin: 0 auto;
    filter: invert(35%) sepia(84%) saturate(1016%) hue-rotate(321deg)
      brightness(88%) contrast(96%);
  }

  .name {
    margin: 1rem 2rem;
    border-bottom: solid 2px ${({ theme }) => theme.darkBlue};
  }

  .container-details {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    span {
      font-weight: 900;
    }
  }

  .category,
  .cook-time {
    display: flex;
    flex-direction: column;
  }

  .container-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .container-ingredients {
    margin: 1rem 0;
  }

  button {
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.75rem 1.25rem;
    background-color: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.primaryBG};
    border: none;
    border-radius: 5px;
  }
`;
