import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 150px 40px 100px 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.lemon};
  }
`;