import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const ButtonA = styled.a`
  display: flex;
  justify-content: center;
  background: ${colors.white};
  color: ${colors.black};

  padding: 14px 38px;
  border-radius: 14px;
  font-weight: bold;
  font-size: 16px;

  width: fit-content;

  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background: ${colors.white};
  color: ${colors.black};

  padding: 14px 38px;
  border-radius: 14px;
  font-weight: bold;
  font-size: 16px;

  width: fit-content;

  cursor: pointer;
`;
