import { FooterContainer, FooterWrapper, Icons } from "./styles";
import SocialMedia from "../../SocialMedia";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>Copyright © 2023 Yas Castro.</p>
        <SocialMedia />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
