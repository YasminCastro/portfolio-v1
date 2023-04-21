import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftInfo = styled.div`
  width: 100%;
  max-width: 500px;

  p {
    font-size: 20px;
  }

  h1 {
    font-size: 48px;
    line-height: 60px;
  }

  button {
    margin-left: 170px;
  }
`;

const upAndDown = keyframes`  
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }

`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 20px;
  animation: ${upAndDown} 2s linear 4;
  z-index: -10;
`;
