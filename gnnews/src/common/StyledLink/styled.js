import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  
  ${({ main }) => main && css`
    width: 100%;
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.lemon};
  }
`;