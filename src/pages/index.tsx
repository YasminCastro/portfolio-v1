import Layout from "@/components/Global/Layout";
import AboutSection from "@/components/Pages/Home/AboutSection";
import HomeSection from "@/components/Pages/Home/HomeSection";
import ProjectsSection from "@/components/Pages/Home/ProjectsSection";
import SkillsSection from "@/components/Pages/Home/SkillsSection";
import { PageContainer, PageWrapper } from "@/styles/styles";

export default function Home() {
  return (
    <Layout>
      <PageWrapper>
        <PageContainer>
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </PageContainer>
      </PageWrapper>
    </Layout>
  );
}
