import Link from "next/link";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Icons,
  PageLinks,
} from "./styles";
import { HiTranslate } from "react-icons/hi";
import SocialMedia from "../../SocialMedia";

const Header = () => {
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
              <p>Home</p>
            </Link>
            <Link href="#about">
              <p>About</p>
            </Link>
            <Link href="#skills">
              <p>Skills</p>
            </Link>
            <Link href="#projects">
              <p>Projects</p>
            </Link>
          </PageLinks>
          <Icons>
            <SocialMedia />
            <HiTranslate size={26} />
          </Icons>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
