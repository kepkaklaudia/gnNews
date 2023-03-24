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

export const Animation = styled.div`
  width: 6px;
  height: 150px;
  background: ${({ theme }) => theme.colors.grey};
  margin: auto;
  position: relative;
  animation: shake 1s linear infinite alternate,
  lightup 1s linear infinite;
  transform-origin: 0 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    width: 32px;
    height: 16px;
    box-sizing:border-box;
    border: 5px solid ${({ theme }) => theme.colors.lemon};
    border-top: none;
    border-radius: 0 0 20px 20px;
  }

  &::after {
    content: '';
    left: 50%;
    bottom: 0;
    position: absolute;
    transform: translateX(-50%);
    width: 80px;
    height: 40px;
    border-radius: 50px 50px 0 0;
    background: ${({ theme }) => theme.colors.grey};

    @media (max-width: 700px) {
      width: 60px;
      height: 30px;
    }
  }

  @keyframes shake {
    0% { 
      transform: rotate(10deg)  
    }
  
    100% { 
      transform: rotate(-10deg)  
    }
  }

  @keyframes lightup {
    0% ,20% , 40% {
      opacity: 0
    }

    10%, 30% , 50% , 100% {
      opacity: 1
    }
  }

  @media (max-width: 700px) {
    width: 4px;
    height: 86px;
  }
`;