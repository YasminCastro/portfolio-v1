import styled from "styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;
  border: 1px solid red;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftInfo = styled.div`
  width: 100%;
  max-width: 500px;
  border: 1px solid pink;

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
