import Link from "next/link";
import {
  HeaderContainer,
  HeaderLeft,
  MobileWrapper,
  HeaderRight,
  HeaderWrapper,
  Icons,
  PageLinks,
} from "./styles";
import { HiTranslate } from "react-icons/hi";
import { useRouter } from "next/router";
import SocialMedia from "../../SocialMedia";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";

const Header = () => {
  const { t } = useTranslation("common");
  const [locale, setLocale] = useState("en");
  const router = useRouter();

  const home = t("header.home");
  const about = t("header.about");
  const projects = t("header.projects");

  useEffect(() => {
    if (router.locale === "en") {
      setLocale("pt-BR");
    } else {
      setLocale("en");
    }
  }, [router.locale]);

  function changeToEn() {
    router.push("/", undefined, { locale });
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <Link href="#">
            <p>{"<yas/>"}</p>
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <PageLinks>
            <Link href="#home">
              <p>{home}</p>
            </Link>
            <Link href="#about">
              <p>{about}</p>
            </Link>
            <Link href="#skills">
              <p>Skills</p>
            </Link>
            {/* <Link href="#projects">
              <p>{projects}</p>
            </Link> */}
          </PageLinks>
          <Icons>
            <SocialMedia />
            <button aria-label="Traduzir" onClick={changeToEn}>
              <HiTranslate size={26} />
            </button>
          </Icons>
        </HeaderRight>
        <MobileWrapper>
          <Icons>
            <SocialMedia />
            <button aria-label="Traduzir" onClick={changeToEn}>
              <HiTranslate size={26} />
            </button>
          </Icons>
        </MobileWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
