import Image from "next/image";
import { SkillsWrapper, SkillsContainer, SkillContainer } from "./styles";
import moment from "moment";
import CircularProgressWithLabel from "@/components/Global/CircularProgressWithLabel";

const skillLanguages = [
  {
    title: "JavaScript",
    experience: "09/21",
    progress: 80,
  },
  {
    title: "TypeScript",
    experience: "12/21",
    progress: 80,
  },
];

const skillFrontend = [
  {
    title: "ReactJS",
    experience: moment("02/22", "MM/YY"),
    progress: 80,
  },
  {
    title: "TypeScript",
    experience: moment("12/21", "MM/YY").format(),
    progress: 80,
  },
];

const skillList = {
  FrontEnd: [
    { name: "ReactJS", start: moment("02/22", "MM/YY").format(), percent: "" },
    { name: "NextJS", start: moment("02/22", "MM/YY").format(), percent: "" },
    {
      name: "AngularJS",
      start: moment("10/22", "MM/YY").format(),
      percent: "",
    },
    {
      name: "StyledComponents",
      start: moment("03/22", "MM/YY").format(),
      percent: "",
    },
  ],
  BackEnd: [
    { name: "NodeJs", start: moment("09/21", "MM/YY").format(), percent: "" },
  ],
  Database: [
    { name: "Prisma", start: moment("01/22", "MM/YY").format(), percent: "" },
    { name: "MongoDB", start: moment("12/21", "MM/YY").format(), percent: "" },
    {
      name: "PostgresSQL",
      start: moment("03/22", "MM/YY").format(),
      percent: "",
    },
  ],
  Other: [
    { name: "Docker", start: moment("03/22", "MM/YY").format(), percent: "" },
    { name: "AWS", start: moment("08/22", "MM/YY").format(), percent: "" },
    {
      name: "Git/Github",
      start: moment("09/21", "MM/YY").format(),
      percent: "",
    },
    { name: "HTML", start: moment("09/21", "MM/YY").format(), percent: "" },
    { name: "CSS", start: moment("09/21", "MM/YY").format(), percent: "" },
    { name: "Rest Api", start: moment("09/21", "MM/YY").format(), percent: "" },
  ],
};

const SkillsSection: React.FC = () => {
  return (
    <SkillsWrapper>
      <SkillsContainer>
        <h2>Skills</h2>

        {skillLanguages.map((element) => {
          return (
            <Skill
              title={element.title}
              experience={element.experience}
              progress={element.progress}
            />
          );
        })}

        {/* <Image
          src="/code-girl.svg"
          alt="Alienigena no espaço"
          width={500}
          height={300}
        /> */}
      </SkillsContainer>
    </SkillsWrapper>
  );
};

const Skill = ({ title, experience, progress }: any) => {
  const now = moment();
  const date = moment(experience, "MM/YY");
  const diff = now.diff(date, "years", true);

  let parsedExperience = diff.toFixed(1);
  console.log(parsedExperience);

  return (
    <SkillContainer>
      <p>{title}</p>
      <p>+ {parsedExperience} years</p>
      <CircularProgressWithLabel progress={progress} />
    </SkillContainer>
  );
};

export default SkillsSection;
