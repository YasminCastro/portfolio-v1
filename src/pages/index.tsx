import Layout from "@/components/Global/Layout";
import SEO from "@/components/Global/SEO";
import AboutSection from "@/components/Pages/Home/AboutSection";
import ContactSection from "@/components/Pages/Home/ContactSection";
import HomeSection from "@/components/Pages/Home/HomeSection";
import ProjectsSection from "@/components/Pages/Home/ProjectsSection";
import SkillsSection from "@/components/Pages/Home/SkillsSection";
import { PageContainer, PageWrapper } from "@/styles/styles";

export default function Home() {
  return (
    <>
      <SEO title="Yas Castro" />
      <Layout>
        <PageWrapper>
          <PageContainer>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </PageContainer>
        </PageWrapper>
      </Layout>
    </>
  );
}
