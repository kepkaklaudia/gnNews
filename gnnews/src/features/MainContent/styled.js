import styled from "styled-components";

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