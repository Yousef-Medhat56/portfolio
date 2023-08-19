import type { NextPage } from "next";
import Head from "next/head";
import ScrollUpButton from "../components/buttons/scrollup.button";
import Header from "../components/navigation/header.navigation";
import CertificateSection from "../components/sections/certificates.section";
import ContactSection from "../components/sections/contact.section";
import EducationSection from "../components/sections/education.section";
import Hero from "../components/sections/hero.section";
import ProjectSection from "../components/sections/projects.section";
import SkillSection from "../components/sections/skills.section";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yousef Medhat</title>
        <meta
          name="description"
          content="I am Yousef Medhat. A full-stack web developer. I build and maintain
            high-quality websites and web applications. I am passionate about
            learning new technologies and improving my skills
            everyday."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <ProjectSection />
      <SkillSection />
      <CertificateSection />
      <EducationSection />
      <ContactSection />
      <ScrollUpButton />
    </div>
  );
};

export default Home;
