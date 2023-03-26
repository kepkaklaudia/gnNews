import styled from "styled-components";

export const Icon = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.colors.silver};
  font-size: 35px;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.lemon};
  }
  
  @media (max-width: 700px) {
    font-size: 25px;
  }

 &.active{
    color: ${({ theme }) => theme.colors.lemon};
  }
`;

export const Wrapper = styled.div`
  @media (max-width: 700px) {
    display: flex;
  }
`;