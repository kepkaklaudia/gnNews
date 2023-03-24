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
`;