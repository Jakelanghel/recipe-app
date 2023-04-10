import styled from "styled-components";

export const StyledSidebar = styled.div`
  width: 100%;
  position: fixed;
  top: 75px;
  left: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryBG};
  height: 100vh;
  z-index: 1;
`;
