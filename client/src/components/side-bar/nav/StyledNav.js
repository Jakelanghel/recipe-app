import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 1rem;
  }

  img {
    width: 25px;
  }
`;
