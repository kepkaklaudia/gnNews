import styled from "styled-components";

export const Loader = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 100px;
  border-radius: 50%;
  display: inline-block;
  border-top: 7px solid ${({ theme }) => theme.colors.grey};
  border-right: 7px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

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
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
} 

@media (max-width: 700px) {
  width: 70px;
  height: 70px;
  margin-top: 50px;

  &::after {
    width: 70px;
    height: 70px;
  }
}
`;
