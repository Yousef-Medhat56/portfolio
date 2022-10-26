import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import ProjectCard, { ProjectCardProps } from "../cards/project.card";
import SectionContainer from "../containers/section.container";

export default function ProjectSection() {
  return (
    <SectionContainer title="Projects" id={"projects"}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {projects.map((project) => (
          <GridItem w="100%" key={project.name}>
            <ProjectCard
              name={project.name}
              description={project.description}
              imgSrc={project.imgSrc}
              siteUrl={project.siteUrl}
              codeUrl={project.codeUrl}
            />
          </GridItem>
        ))}
      </Grid>
    </SectionContainer>
  );
}

const projects: ProjectCardProps[] = [
  {
    name: "My Portfolio",
    description:
      "The beautiful website that you are viewing now! A portfolio website to build my online presence and show the projects I worked on, my skills, qualifications and my social media links.",
    imgSrc: "/images/projects/portfolio.png",
    codeUrl: "https://github.com/Yousef-Medhat56/portfolio",
  },
  {
    name: "Arica Group Co. website",
    description:
      "A website for a landscape design company. The website displays the company services, the current offers they provide, their customers reviews and more info about the company. I am currently working on the website.",
    imgSrc: "/images/projects/arica-group.png",
  },
  {
    name: "MUN Event website",
    description:
      "A website for a Turkish high school that was hosting a MUN conference. They wanted a website to show their preparations for the conference and provide information about the conference, like: date, location and the team members.",
    imgSrc: "/images/projects/kaptanimun.png",
  },
  {
    name: "Landing Page",
    description:
      "A landing page that I built to learn how to: implement beautifual layouts and create nice animations.",
    imgSrc: "/images/projects/landing-page.png",
    codeUrl: "https://github.com/Yousef-Medhat56/HTML-CSS-Template-3",
    siteUrl: "https://yousef-medhat56.github.io/HTML-CSS-Template-3/",
  },
];
