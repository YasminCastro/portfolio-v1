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
  const { t, lang } = useTranslation("common");

  const title = t("about.title");
  const text = t("about.text");

  return (
    <AboutWrapper id="about">
      <AboutDesktop title={title} text={text} lang={lang} />
      <AboutMobile title={title} text={text} lang={lang} />
    </AboutWrapper>
  );
};

const downloadFile = (lang: string) => {
  let filePath = "portugueseCV.pdf";
  if (lang === "en") {
    filePath = "englishCV.pdf";
  }

  const aTag = document.createElement("a");
  aTag.href = filePath;
  aTag.setAttribute("download", "Yasmin-CV");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

const AboutDesktop = ({ title, text, lang }: any) => {
  return (
    <AboutContainerDesktop>
      <ImageSize>
        <Image src="/skater-girl.svg" alt="Garota andando de skate" fill />
      </ImageSize>

      <RightInfo>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button
          onClick={() => {
            downloadFile(lang);
          }}
        >
          Download CV
        </Button>
      </RightInfo>
    </AboutContainerDesktop>
  );
};

const AboutMobile = ({ title, text, lang }: any) => {
  return (
    <AboutContainerMobile>
      <RightInfo>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button
          onClick={() => {
            downloadFile(lang);
          }}
        >
          Download CV
        </Button>
      </RightInfo>
      <ImageSize>
        <Image src="/skater-girl.svg" alt="Garota andando de skate" fill />
      </ImageSize>
    </AboutContainerMobile>
  );
};

export default AboutSection;
