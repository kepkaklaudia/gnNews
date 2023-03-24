import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 250px auto 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 50px;
  margin-top: 40px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;