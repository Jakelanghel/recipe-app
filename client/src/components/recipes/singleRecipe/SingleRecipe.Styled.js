import styled from "styled-components";

export const StyledSingleRecipe = styled.div`
  width: 100%;
  padding: 1rem;

  span {
    font-weight: 700;
    text-transform: capitalize;
  }

  .category {
    margin-bottom: 0.5rem;
  }

  h2 {
    text-transform: capitalize;
  }

  .container-details {
    margin: 1rem 0;
  }

  .ingredients,
  .instructions {
    padding: 1rem 2rem;
  }

  .ingredient,
  .instruction {
    margin-bottom: 0.5rem;
  }
`;
