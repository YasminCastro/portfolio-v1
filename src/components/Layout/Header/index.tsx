import Link from "next/link";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Icons,
  PageLinks,
} from "./styles";
import SocialMedia from "@/components/SocialMedia";
import { HiTranslate } from "react-icons/hi";

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
            <Link href="#">
              <p>Home</p>
            </Link>
            <Link href="#">
              <p>About</p>
            </Link>
            <Link href="#">
              <p>Skills</p>
            </Link>
            <Link href="#">
              <p>Project</p>
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
