import Image from "next/image";
import { ArrowDown, HomeContainer, LeftInfo } from "./styles";
import { Button } from "@/components/Global";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import useTranslation from "next-translate/useTranslation";

const HomeSection: React.FC = () => {
  const { t } = useTranslation("common");
  const hello = t("home.hello");
  const iAm = t("home.i-am");
  const developer = t("home.developer");
  const contact = t("home.contact");

  return (
    <HomeContainer>
      <LeftInfo>
        <p>{hello}</p>
        <h1>
          {iAm} Yasmin, <br /> {developer}
        </h1>
        <Button href="#contact">{contact}</Button>
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
