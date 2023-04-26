import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 100vw;
  height: 64px;

  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.gray800};
`;

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: ${colors.gray700};
    font-size: 14px;
  }
  @media (max-width: 400px) {
    p {
      color: ${colors.gray700};
      font-size: 10px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  p {
    color: ${colors.white};
  }

  @media (max-width: 550px) {
    p {
      display: none;
    }
  }
`;
