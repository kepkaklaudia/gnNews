import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;

  @media (max-width: 700px) {
    margin-top: 0px;
  }
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const StyledImage = styled.img`
  width: 30px;

  @media (max-width: 700px) {
      width: 25px;
  }
`;
