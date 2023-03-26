import styled from "styled-components";
import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent};
  }

  &.btn-primary:active {
    background-color: ${({ theme }) => theme.colors.transparent};
    box-shadow: 
      inset 1px 1px 1px ${({ theme }) => theme.colors.lemon},
      1px 1px 1px ${({ theme }) => theme.colors.lemon};
  }

  &.btn:focus-visible {
    background-color: ${({ theme }) => theme.colors.transparent};
    box-shadow: 
      inset 1px 1px 1px ${({ theme }) => theme.colors.lemon},
      1px 1px 1px ${({ theme }) => theme.colors.lemon};
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.silver};
  font-size: 50px;
  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const StyledOffcanvas = styled(Offcanvas)`
  background-color: ${({ theme }) => theme.colors.mercury};
  width: 250px !important;
`;