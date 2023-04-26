import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  scroll-margin-top: 90px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const LeftInfo = styled.div`
  width: 100%;
  max-width: 500px;

  p {
    font-size: 20px;
  }

  h1 {
    font-size: 44px;
    line-height: 58px;
    white-space: nowrap;
  }

  a {
    margin-top: 24px;
  }

  @media (max-width: 1300px) {
    h1 {
      font-size: 34px;
      line-height: 48px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 28px;
      line-height: 38px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 500px) {
    h1 {
      white-space: normal;
    }
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
`;

export const ImageSize = styled.div`
  width: 550px;
  height: 350px;
  position: relative;

  @media (max-width: 700px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 400px) {
    width: 250px;
  }
`;
