import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: calc(100vh - 68px);
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 48px;
  }

  scroll-margin-top: 50px;

  @media (max-width: 1300px) {
    h2 {
      font-size: 34px;
    }
  }
`;
