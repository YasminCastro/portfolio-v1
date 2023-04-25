import Image from "next/image";
import { ImageSize, ProjectsContainer } from "./styles";
import { Button } from "@/components/Global";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useTranslation from "next-translate/useTranslation";

const ProjectsSection: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 10000 }));
  const { t } = useTranslation("common");
  const title = t("projects.title");
  const github = t("projects.github");

  return (
    <ProjectsContainer id="projects">
      <h2>{title}</h2>
      <Carousel
        mx="auto"
        height={400}
        withIndicators
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize="33.333333%"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%" },
        ]}
      >
        <Carousel.Slide>
          <ImageSize width={900} height={400}>
            <Image src="/wizard.png" alt="Teste" fill />
          </ImageSize>
        </Carousel.Slide>
      </Carousel>
      <Button href="https://github.com/YasminCastro" target="_blank">
        {github}
      </Button>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
