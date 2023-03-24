import styled from "styled-components";
import { NavLink } from "react-router-dom";

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