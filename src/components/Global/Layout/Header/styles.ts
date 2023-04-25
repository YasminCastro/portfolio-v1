import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 64px;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  background: ${colors.black};
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 150px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    margin: 0 50px;
  }
`;

export const HeaderLeft = styled.div`
  font-weight: bold;
  font-size: 22px;

  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 75px;

  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  gap: 40px;
`;

export const PageLinks = styled.div`
  display: flex;
  gap: 50px;
`;
