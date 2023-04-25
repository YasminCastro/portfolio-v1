import Image from "next/image";
import { ArrowDown, HomeContainer, LeftInfo } from "./styles";
import { Button } from "@/components/Global";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const HomeSection: React.FC = () => {
  return (
    <HomeContainer>
      <LeftInfo>
        <p>Hi!</p>
        <h1>
          I’m Yasmin, <br /> Full-Stack Developer
        </h1>
        <Button href="#contact">Contact</Button>
      </LeftInfo>
      <Image
        src="/outer-space.svg"
        alt="Alienigena no espaço"
        width={550}
        height={350}
      />
      <ArrowDown>
        <MdOutlineKeyboardDoubleArrowDown size={30} />
      </ArrowDown>
    </HomeContainer>
  );
};

export default HomeSection;
