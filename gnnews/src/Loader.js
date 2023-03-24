import styled from "styled-components";

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  margin: 250px auto 0;
  border-radius: 50%;
  display: flex;
  border-top: 7px solid ${({ theme }) => theme.colors.grey};
  border-right: 7px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @media (max-width: 700px) {
    width: 70px;
    height: 70px;
    margin-top: 200px;
  }

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-left: 7px solid ${({ theme }) => theme.colors.lemon};
    border-bottom: 7px solid transparent;
    animation: rotation 0.5s linear infinite reverse;

    @media (max-width: 700px) {
      width: 70px;
      height: 70px;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  } 
`;