import styled from "styled-components";

import Header from "./Header";
// import Footer from "../Footer";

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
`;
