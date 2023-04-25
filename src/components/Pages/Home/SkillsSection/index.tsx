import {
  SkillsWrapper,
  SkillsContainer,
  SkillContainer,
  SkillInfo,
  SkillsByCategories,
  SkillsTabs,
} from "./styles";
import moment from "moment";
import Image from "next/image";
import { Progress, Tabs } from "@mantine/core";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiStyledcomponents,
  SiNodedotjs,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
  SiGit,
} from "react-icons/si";

const SkillsSection: React.FC = () => {
  return (
    <SkillsWrapper id="#skills">
      <SkillsContainer>
        <SkillsTabs>
          <h2>Skills</h2>

          <Tabs
            orientation="vertical"
            color="pink"
            variant="pills"
            defaultValue="languages"
          >
            <Tabs.List>
              <Tabs.Tab value="languages">Languages</Tabs.Tab>
              <Tabs.Tab value="backend">Back End</Tabs.Tab>
              <Tabs.Tab value="frontend">Front End</Tabs.Tab>
              <Tabs.Tab value="database">Database</Tabs.Tab>
              <Tabs.Tab value="others">Others</Tabs.Tab>
            </Tabs.List>
            <hr />

            <Tabs.Panel value="languages" pl="xs">
              {skillsLanguages.map((element) => {
                return (
                  <Skill
                    key={`languages-${element.title}`}
                    title={element.title}
                    experience={element.experience}
                    progress={element.progress}
                    logo={element.logo}
                  />
                );
              })}
            </Tabs.Panel>

            <Tabs.Panel value="backend" pl="xs">
              {skillsBackEnd.map((element) => {
                return (
                  <Skill
                    key={`backend-${element.title}`}
                    title={element.title}
                    experience={element.experience}
                    progress={element.progress}
                    logo={element.logo}
                  />
                );
              })}
            </Tabs.Panel>

            <Tabs.Panel value="frontend" pl="xs">
              <SkillsByCategories>
                {skillsFrontend.map((element) => {
                  return (
                    <Skill
                      key={`frontend-${element.title}`}
                      title={element.title}
                      experience={element.experience}
                      progress={element.progress}
                      logo={element.logo}
                    />
                  );
                })}
              </SkillsByCategories>
            </Tabs.Panel>

            <Tabs.Panel value="database" pl="xs">
              {skillsDatabase.map((element) => {
                return (
                  <Skill
                    key={`database-${element.title}`}
                    title={element.title}
                    experience={element.experience}
                    progress={element.progress}
                    logo={element.logo}
                  />
                );
              })}
            </Tabs.Panel>

            <Tabs.Panel value="others" pl="xs">
              {skillsOthers.map((element) => {
                return (
                  <Skill
                    key={`others-${element.title}`}
                    title={element.title}
                    experience={element.experience}
                    progress={element.progress}
                    logo={element.logo}
                  />
                );
              })}
            </Tabs.Panel>
          </Tabs>
        </SkillsTabs>
        <Image
          src="/code.svg"
          alt="Alienigena no espaço"
          width={550}
          height={350}
        />
      </SkillsContainer>
    </SkillsWrapper>
  );
};

const Skill = ({ title, experience, progress, logo }: any) => {
  const now = moment();
  const date = moment(experience, "MM/YY");
  const diff = now.diff(date, "years", true);

  let parsedExperience = diff.toFixed(1);

  return (
    <SkillContainer>
      <SkillInfo>
        {logo}
        <div>
          <p className="title">{title}</p>
          <p className="experience">+ {parsedExperience} years</p>
        </div>
      </SkillInfo>
      <Progress color="pink" value={progress} />
    </SkillContainer>
  );
};

export default SkillsSection;

const skillsLanguages = [
  {
    title: "JavaScript",
    experience: "09/21",
    progress: 80,
    logo: <SiJavascript size={38} />,
  },
  {
    title: "TypeScript",
    experience: "12/21",
    progress: 80,
    logo: <SiTypescript size={38} />,
  },
];

const skillsFrontend = [
  {
    title: "ReactJS",
    experience: "02/22",
    progress: 70,
    logo: <SiReact size={38} />,
  },
  {
    title: "React Native",
    experience: "02/23",
    progress: 10,
    logo: <SiReact size={38} />,
  },
  {
    title: "NextJS",
    experience: "02/22",
    progress: 70,
    logo: <SiNextdotjs size={38} />,
  },
  {
    title: "StyledComponents",
    experience: "03/22",
    progress: 50,
    logo: <SiStyledcomponents size={38} color="#fff" />,
  },
  {
    title: "AngularJS",
    experience: "10/22",
    progress: 40,
    logo: <SiAngular size={38} />,
  },
];

const skillsBackEnd = [
  {
    title: "NodeJS",
    experience: "09/21",
    progress: 70,
    logo: <SiNodedotjs size={38} />,
  },
];

const skillsDatabase = [
  {
    title: "Prisma",
    experience: "01/22",
    progress: 60,
    logo: <SiPrisma size={38} />,
  },
  {
    title: "MongoDB",
    experience: "12/21",
    progress: 80,
    logo: <SiMongodb size={38} />,
  },
  {
    title: "PostgresSQL",
    experience: "03/22",
    progress: 70,
    logo: <SiPostgresql size={38} />,
  },
];

const skillsOthers = [
  {
    title: "Docker",
    experience: "03/22",
    progress: 60,
    logo: <SiDocker size={38} />,
  },
  {
    title: "AWS",
    experience: "08/22",
    progress: 30,
    logo: <SiAmazonaws size={38} />,
  },
  {
    title: "Git / Github",
    experience: "09/21",
    progress: 80,
    logo: <SiGit size={38} />,
  },
];
