import styled from "styled-components";

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