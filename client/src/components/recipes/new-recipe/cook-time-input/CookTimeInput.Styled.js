import styled from "styled-components";

export const StyledCookTimeInput = styled.div`
  width: 100%;

  label {
    margin-bottom: 1rem;
  }

  .container-flex {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .parent {
    gap: 2.5rem;
  }

  .hrs,
  .mins {
    gap: 1rem;
  }

  p {
    text-transform: capitalize;
    font-weight: 900;
  }

  .container-input {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    width: 65px;
    padding: 0.5rem;
  }

  .container-actions {
    display: flex;
    flex-direction: column;
  }
`;
