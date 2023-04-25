import Image from "next/image";
import { HomeContainer, LeftInfo } from "./styles";
import SocialMedia from "@/components/Global/SocialMedia";

const ContactSection: React.FC = () => {
  return (
    <HomeContainer>
      <LeftInfo>
        <p>Let's make something amazing together!</p>
        <p className="contact">Contact me!</p>
        <SocialMedia />
      </LeftInfo>

      <Image
        src="/green-code-girl.svg"
        alt="Alienigena no espaço"
        width={480}
        height={480}
      />
    </HomeContainer>
  );
};

export default ContactSection;
