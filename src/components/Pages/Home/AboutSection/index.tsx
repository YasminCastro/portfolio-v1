import Image from "next/image";
import {
  AboutContainerDesktop,
  AboutContainerMobile,
  AboutWrapper,
  ImageSize,
  RightInfo,
} from "./styles";
import { Button } from "@/components/Global";
import useTranslation from "next-translate/useTranslation";

const AboutSection: React.FC = () => {
  const { t } = useTranslation("common");

  const title = t("about.title");
  const text = t("about.text");

  return (
    <AboutWrapper id="about">
      <AboutDesktop title={title} text={text} />
      <AboutMobile title={title} text={text} />
    </AboutWrapper>
  );
};

const AboutDesktop = ({ title, text }: any) => {
  return (
    <AboutContainerDesktop>
      <ImageSize>
        <Image src="/skater-girl.svg" alt="Alienigena no espaço" fill />
      </ImageSize>

      <RightInfo>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>Download CV</Button>
      </RightInfo>
    </AboutContainerDesktop>
  );
};

const AboutMobile = ({ title, text }: any) => {
  return (
    <AboutContainerMobile>
      <RightInfo>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>Download CV</Button>
      </RightInfo>
      <ImageSize>
        <Image src="/skater-girl.svg" alt="Alienigena no espaço" fill />
      </ImageSize>
    </AboutContainerMobile>
  );
};

export default AboutSection;
