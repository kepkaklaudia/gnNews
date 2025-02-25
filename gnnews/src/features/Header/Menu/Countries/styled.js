import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 10px 0px ${({ theme }) => theme.colors.silver};
  display: flex;
  gap: 10px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 15px 10px;
  width: 200px;
  transition: transform 0.3s;

  &:hover {
    filter: brightness(104%);
    transform: scale(1.05);
  }

  @media (max-width: 700px) {
    padding: 10px 5px; 
  }
`;

export const Image = styled.img`
  width: 40px;

  @media (max-width: 700px) {
    width: 30px;
  }
`;

export const Name = styled.p`
  margin: 0;
  align-self: center;
`;