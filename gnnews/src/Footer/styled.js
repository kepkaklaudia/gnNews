import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 280px;
  height: 80px;
  padding: 10px 40px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-column: 1fr;
    justify-content: center;
    height: 80px;
    padding: 10px 10px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.lemon};
  margin: 0;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;