import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const ContactContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 700px) {
    height: auto;

    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const LeftInfo = styled.div`
  width: 100%;
  max-width: 40%;

  h2 {
    font-size: 48px;
    font-weight: bold;
  }

  .contact {
    font-size: 20px;
    font-weight: 200;
    color: ${colors.gray700};
    margin-bottom: 20px;
  }

  .email {
    margin-bottom: 10px;
  }

  @media (max-width: 1300px) {
    h2 {
      font-size: 38px;
    }

    .contact {
      margin-top: 6px;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 30px;
    }

    .contact {
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    max-width: 70%;
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
  @media (max-width: 900px) {
    width: 280px;
    height: 280px;
  }
`;
