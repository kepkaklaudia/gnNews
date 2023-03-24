import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 280px;
  height: 150px;
  padding: 10px 40px;
  z-index: 1;
 
  @media (max-width: 700px) {
    display: grid;
    grid-tempate-column: 1fr;
    height: 135px;
    justify-content: center;
    padding: 10px 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 90px;
  margin-left: 20px;

  @media (max-width: 700px) {
    height: 50px;
  }
`;

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