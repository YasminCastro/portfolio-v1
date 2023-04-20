import Layout from "@/components/Global/Layout";
import AboutSection from "@/components/Pages/Home/AboutSection";
import HomeSection from "@/components/Pages/Home/HomeSection";
import { PageContainer, PageWrapper } from "@/styles/styles";

export default function Home() {
  return (
    <Layout>
      <PageWrapper>
        <PageContainer>
          <HomeSection />
          <AboutSection />
        </PageContainer>
      </PageWrapper>
    </Layout>
  );
}
