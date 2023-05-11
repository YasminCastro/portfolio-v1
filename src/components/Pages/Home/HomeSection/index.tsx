import Image from "next/image";
import { ArrowDown, HomeContainer, ImageSize, LeftInfo } from "./styles";
import { Button } from "@/components/Global";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const HomeSection: React.FC = () => {
  const { t } = useTranslation("common");
  const hello = t("home.hello");
  const iAm = t("home.i-am");
  const developer = t("home.developer");
  const contact = t("home.contact");

  return (
    <HomeContainer id="home">
      <LeftInfo>
        <p>{hello}</p>
        <h1>
          {iAm} Yasmin, <br /> {developer}
        </h1>
        <Button href="#contact">{contact}</Button>
      </LeftInfo>
      <ImageSize>
        <Image
          src="/outer-space.svg"
          alt="Alienigena no espaço"
          fill
          priority
        />
      </ImageSize>
      <ArrowDown>
        <Link href="#about">
          <MdOutlineKeyboardDoubleArrowDown size={30} />
        </Link>
      </ArrowDown>
    </HomeContainer>
  );
};

export default HomeSection;
