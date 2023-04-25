import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const SkillsWrapper = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  scroll-margin-top: 90px;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 50px;

  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    align-items: flex-end;
  }
`;

export const SkillsTabs = styled.div`
  height: 100%;
  width: 100%;

  p {
    font-size: 20px;
  }

  h2 {
    font-size: 90px;
    margin-bottom: 18px;
  }

  hr {
    margin: 0 8px;
  }

  .mantine-Tabs-root {
    height: 70%;
  }

  .mantine-Tabs-tab {
    :hover {
      background: #e64980;
    }
  }

  @media (max-width: 1300px) {
    h2 {
      font-size: 70px;
    }
  }
`;

export const SkillContainer = styled.div`
  width: 230px;
  margin: 20px;
`;

export const SkillsByCategories = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const SkillInfo = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;

  gap: 24px;
  .title {
    font-weight: bold;
    margin-bottom: 2px;
  }

  .experience {
    font-weight: 100;
    font-size: 14px;
    color: ${colors.gray800};
  }
`;

export const ImageSize = styled.div`
  width: 550px;
  height: 350px;
  position: relative;

  @media (max-width: 1400px) {
    width: 450px;
    height: 250px;
  }
`;
