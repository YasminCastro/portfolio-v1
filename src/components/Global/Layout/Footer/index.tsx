import { FooterContainer, FooterWrapper, Icons } from "./styles";
import SocialMedia from "../../SocialMedia";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Icons>
          <SocialMedia />
        </Icons>
        <p>Copyright © 2023 Yas Castro.</p>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
