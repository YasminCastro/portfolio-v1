import styled from "styled-components";

export const AboutContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const RightInfo = styled.div`
  width: 100%;
  max-width: 40%;
  height: 100%;

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
`;
