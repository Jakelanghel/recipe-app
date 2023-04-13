import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1.5rem;

  .close-icon {
    width: 55px;
    padding: 1rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 1rem;
    color: ${({ theme }) => theme.primaryTxt};
    text-decoration: none;
  }

  img {
    width: 25px;
  }
`;
