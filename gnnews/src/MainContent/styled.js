import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.lemon};
  }
`;