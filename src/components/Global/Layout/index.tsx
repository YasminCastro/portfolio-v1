import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;

const MainContainer = styled.main`
  padding-top: 64px;

  margin: 0 48px;

  @media (max-width: 1300px) {
    margin: 0 10px;
  }
`;
