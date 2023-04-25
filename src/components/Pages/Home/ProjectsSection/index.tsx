import Image from "next/image";
import { ProjectsContainer } from "./styles";
import { Button } from "@/components/Global";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const ProjectsSection: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 10000 }));

  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <Carousel
        mx="auto"
        height={400}
        withIndicators
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize="33.333333%"
      >
        <Carousel.Slide>
          <Image src="/wizard.png" alt="Teste" width={900} height={400} />
        </Carousel.Slide>
      </Carousel>
      <Button href="https://github.com/YasminCastro" target="_blank">
        Check my repositories
      </Button>
    </ProjectsContainer>
  );
};

export default ProjectsSection;