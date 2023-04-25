import { FooterContainer, FooterWrapper } from "./styles";
import SocialMedia from "../../SocialMedia";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>Copyright © 2023 Yas Castro.</p>
        <SocialMedia showEmail={true} />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
