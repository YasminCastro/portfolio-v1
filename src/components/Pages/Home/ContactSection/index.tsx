import Image from "next/image";
import { ContactContainer, ImageSize, LeftInfo } from "./styles";
import SocialMedia from "@/components/Global/SocialMedia";
import useTranslation from "next-translate/useTranslation";

const ContactSection: React.FC = () => {
  const { t } = useTranslation("common");
  const title = t("contact.title");
  const subtitle = t("contact.subtitle");

  return (
    <ContactContainer id="contact">
      <LeftInfo>
        <h2>{title}</h2>
        <p className="contact">{subtitle}</p>
        <p className="email">yasminsdcastro@gmail.com</p>
        <SocialMedia />
      </LeftInfo>

      <ImageSize>
        <Image src="/green-code-girl.svg" alt="Alienigena no espaço" fill />
      </ImageSize>
    </ContactContainer>
  );
};

export default ContactSection;
