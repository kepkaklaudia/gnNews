import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 150px 40px 100px 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;

  @media (max-width: 700px) {
    margin-bottom: 120px;
    margin-top: 135px;
  }

  ${({ grid }) => grid && css`
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
    grid-template-rows: auto;
  `}
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  margin-top: 10px;
  padding: 15px 10px; 
  box-shadow: 1px 1px 10px 0px ${({ theme }) => theme.colors.silver};
  transition: transform 0.3s;
  max-width: 1200px;
  width: 100%;
  min-width: 280px;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.lemon};
  }
`;

export const Image = styled.img`
  aspect-ratio: 3/2;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  ${({ grid }) => grid && css`
    align-self: flex-end;
  `}
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  word-break: break-word;

  @media (max-width: 700px) {
    font-size: 12px;
  }

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const Heading = styled.h2`
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 700px) {
  font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  margin-top: 10px;
`;