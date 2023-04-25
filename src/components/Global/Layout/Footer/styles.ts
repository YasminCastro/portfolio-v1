import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 100vw;
  height: 200px;

  display: flex;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 50px;
  p {
    color: ${colors.gray700};
    font-size: 14px;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 40px;
`;
