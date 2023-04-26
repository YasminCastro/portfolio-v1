import { FooterContainer, FooterWrapper, RightSide } from "./styles";
import SocialMedia from "../../SocialMedia";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>Copyright © 2023 Yas Castro.</p>
        <RightSide>
          <p>yasminsdcastro@gmail.com</p>
          <SocialMedia />
        </RightSide>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
