import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 1rem;
    color: ${({ theme }) => theme.darkBlue};
    text-decoration: none;
  }

  img {
    width: 25px;
    filter: invert(28%) sepia(9%) saturate(1800%) hue-rotate(197deg)
      brightness(95%) contrast(86%);
  }
`;
