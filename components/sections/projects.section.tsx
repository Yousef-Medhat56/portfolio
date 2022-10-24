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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim",
    imgSrc: "/images/projects/portfolio.png",
    codeUrl: "https://github.com/Yousef-Medhat56/portfolio",
  },
  {
    name: "Arica Group CO. website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim",
    imgSrc: "/images/projects/arica-group.png",
  },
  {
    name: "MUN Event website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim",
    imgSrc: "/images/projects/kaptanimun.png",
  },
  {
    name: "Landing Page",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim",
    imgSrc: "/images/projects/landing-page.png",
    codeUrl: "https://github.com/Yousef-Medhat56/HTML-CSS-Template-3",
    siteUrl: "https://yousef-medhat56.github.io/HTML-CSS-Template-3/",
  },
];
