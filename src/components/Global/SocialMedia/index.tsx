import { Avatar } from "@mantine/core";
import { SocialMediaWrapper } from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialMedia = ({ showEmail, showAvatar }: any) => {
  const iconSizes = 26;
  return (
    <SocialMediaWrapper>
      {showAvatar && (
        <a href="mailto:yasminsdcastro@gmail.com" target="_blank">
          <Avatar src="avatar.jpg" alt="it's me" radius="xl" />
        </a>
      )}

      {/* {showEmail && "yasminsdcastro@gmail.com"}
      <a href="mailto:yasminsdcastro@gmail.com" target="_blank">
        <HiOutlineMail size={iconSizes} />
      </a> */}

      <a
        href="https://www.linkedin.com/in/yasmin-castro-b579451b8"
        target="_blank"
        aria-label="Linkedin"
      >
        <FaLinkedin size={iconSizes} />
      </a>
      <a
        href="https://www.linkedin.com/in/yasmin-castro-b579451b8"
        target="_blank"
        aria-label="Github"
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
