import Link from "next/link";
import { SocialMediaWrapper } from "./styles";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialMedia = () => {
  const iconSizes = 26;
  return (
    <SocialMediaWrapper>
      <Link href="">
        <HiOutlineMail size={iconSizes} />
      </Link>
      <Link href="">
        <FaLinkedin size={iconSizes} />
      </Link>
      <Link href="">
        <FaDiscord size={iconSizes} />
      </Link>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
