import styled from "styled-components";

export const AboutWrapper = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  scroll-margin-top: 90px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AboutContainerDesktop = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const AboutContainerMobile = styled.div`
  display: none;
  height: 100%;
  width: 100%;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const RightInfo = styled.div`
  width: 100%;
  max-width: 40%;

  p {
    font-size: 20px;
    text-align: justify;
  }

  h2 {
    font-size: 98px;
    line-height: 60px;
    margin: 90px 0;
    text-align: right;
  }

  a {
    margin-top: 24px;
  }

  @media (max-width: 1300px) {
    h2 {
      margin-bottom: 50px;
      font-size: 68px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin: 0 0;
      margin-bottom: 20px;
    }

    p {
      text-align: center;
    }
  }
`;

export const ImageSize = styled.div`
  width: 480px;
  height: 480px;
  position: relative;

  @media (max-width: 1300px) {
    width: 380px;
    height: 380px;
  }

  @media (max-width: 800px) {
    width: 280px;
    height: 280px;
  }
`;
