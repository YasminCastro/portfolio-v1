import Link from "next/link";
import { SocialMediaWrapper } from "./styles";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialMedia = () => {
  const iconSizes = 26;
  return (
    <SocialMediaWrapper>
      <Link href="mailto:yasminsdcastro@gmail.com">
        <HiOutlineMail size={iconSizes} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yasmin-castro-b579451b8"
        target="_blank"
      >
        <FaLinkedin size={iconSizes} />
      </Link>
      {/* <Link href="">
        <FaDiscord size={iconSizes} />
      </Link> */}
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
