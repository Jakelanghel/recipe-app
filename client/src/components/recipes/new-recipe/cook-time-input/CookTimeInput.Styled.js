import styled from "styled-components";

export const StyledCookTimeInput = styled.div`
  width: 100%;

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

  .container-input {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input {
    width: 65px;
    padding: 0.5rem 0;
  }

  .container-actions {
    display: flex;
    flex-direction: column;
  }
`;
