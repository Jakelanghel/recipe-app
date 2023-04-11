import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSidebar = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 70;
  left: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryBG};
  height: 100vh;
  z-index: 2;
`;
