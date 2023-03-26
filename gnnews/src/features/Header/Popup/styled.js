import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.lemon};
  border:  ${({ theme }) => theme.colors.lemon};
  transition: 0.4s;
  padding: 10px 20px;
  margin: 0 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (max-width: 700px) {
    padding: 8px 15px;
    margin: 0 10px;
  }

  &.btn-primary:active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey};
  }

  &.btn:focus-visible {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey};
    box-shadow: 
      inset 1px 1px 1px ${({ theme }) => theme.colors.lemon},
      1px 1px 1px ${({ theme }) => theme.colors.lemon};
  }
`;

export const Heading = styled.h2`
  font-size: 28px;
  margin:0;
  padding: 5px 0;

  ${({ secondary }) => secondary && css`
    font-size: 25px;
  `}
`;

export const Text = styled.p`
  margin: 10px auto;
  font-size: 20px;
`;