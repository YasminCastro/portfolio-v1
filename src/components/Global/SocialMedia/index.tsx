import { SocialMediaWrapper } from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialMedia = ({ showEmail }: any) => {
  const iconSizes = 26;
  return (
    <SocialMediaWrapper>
      {showEmail && "yasminsdcastro@gmail.com"}
      <a href="mailto:yasminsdcastro@gmail.com" target="_blank">
        <HiOutlineMail size={iconSizes} />
      </a>
      <a
        href="https://www.linkedin.com/in/yasmin-castro-b579451b8"
        target="_blank"
      >
        <FaLinkedin size={iconSizes} />
      </a>
      <a
        href="https://www.linkedin.com/in/yasmin-castro-b579451b8"
        target="_blank"
      >
        <FaGithub size={iconSizes} />
      </a>
      {/* <Link href="">
        <FaDiscord size={iconSizes} />
      </Link> */}
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
