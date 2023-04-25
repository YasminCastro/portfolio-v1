import Image from "next/image";
import { AboutContainer, ImageSize, RightInfo } from "./styles";
import { Button } from "@/components/Global";
import useTranslation from "next-translate/useTranslation";

const AboutSection: React.FC = () => {
  const { t } = useTranslation("common");

  const title = t("about.title");
  const text = t("about.text");

  return (
    <AboutContainer id="about">
      <ImageSize>
        <Image src="/skater-girl.svg" alt="Alienigena no espaço" fill />
      </ImageSize>

      <RightInfo>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>Download CV</Button>
      </RightInfo>
    </AboutContainer>
  );
};

export default AboutSection;
