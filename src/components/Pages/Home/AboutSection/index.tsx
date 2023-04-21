import Image from "next/image";
import { HomeContainer, RightInfo } from "./styles";
import { Button } from "@/components/Global";

const AboutSection: React.FC = () => {
  return (
    <HomeContainer>
      <Image
        src="/skater-girl.svg"
        alt="Alienigena no espaço"
        width={480}
        height={480}
      />
      <RightInfo>
        <h2>About</h2>
        <p>
          Hi! I am Ankit yadav, a web designer/developer focused on crafting
          great web experiences. Designing and Coding have been my passion since
          the days I started working with computers but I found myself into web
          design/development since 2007. I enjoy creating beautifully designed,
          intuitive and functional websites.
        </p>
        <Button>Download CV</Button>
      </RightInfo>
    </HomeContainer>
  );
};

export default AboutSection;
