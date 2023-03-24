import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    color: ${({ theme }) => theme.colors.lemon};
  }
`;

export const Image = styled.img`
  width: 40px;

  @media (max-width: 700px) {
    width: 30px;
  }
`;