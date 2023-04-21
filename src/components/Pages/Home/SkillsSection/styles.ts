import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const SkillsWrapper = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid red;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 100px;

  p {
    font-size: 20px;
  }

  h2 {
    font-size: 98px;
  }

  .bubble-left {
    /* Modify size here: */
    --size: 50px;

    position: relative;
    width: var(--size);
    height: calc(var(--size) * 0.66);
    background: #333;
    border-radius: 10px;
  }

  .bubble-left:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: calc(var(--size) * 0.13) solid transparent;
    border-right-color: #333;
    border-left: 0;
    margin-top: calc(var(--size) * 0.13 * -1);
    margin-left: calc(var(--size) * 0.13 * -1);
  }
`;

export const SkillContainer = styled.div``;
