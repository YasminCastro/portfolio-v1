import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const ContactContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LeftInfo = styled.div`
  width: 100%;
  max-width: 40%;

  p {
    font-size: 48px;
    font-weight: bold;
  }

  .contact {
    font-size: 20px;
    font-weight: 200;
    color: ${colors.gray700};
    margin-bottom: 20px;
  }

  @media (max-width: 1300px) {
    p {
      font-size: 38px;
    }

    .contact {
      margin-top: 6px;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 900px) {
    p {
      font-size: 30px;
    }

    .contact {
      font-size: 16px;
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
  @media (max-width: 900px) {
    width: 280px;
    height: 280px;
  }
`;
