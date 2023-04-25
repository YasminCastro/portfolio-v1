import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const HomeContainer = styled.div`
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
`;
