import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

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

  ${({ details }) => details && css`
    flex-direction: column;

    @media (max-width: 700px) {
      flex-direction: row;
    }
  `}
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