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
    name: "Soccer info website",
    description:
      "A website for football data: Getting matches on a specific date, Match Lineups, Match statistics, Match events, League standings and Teams.",
    imgSrc: "/images/projects/soccer-info.png",
    codeUrl: "https://github.com/Yousef-Medhat56/soccer-live",
    siteUrl: "https://soccer-info.vercel.app",
  },
  {
    name: "Arica Group Co. website",
    description:
      "A website for a landscape design company. The website displays the company services, the current offers they provide, their customers reviews and more info about the company. I am currently working on the website.",
    imgSrc: "/images/projects/arica-group.png",
  },
  {
    name: "Youtube videos downloader",
    description:
      "A website for downloading youtube videos in mp4, mp3, webm and opus formats.",
    imgSrc: "/images/projects/youtube-dl.png",
    codeUrl: "https://github.com/Yousef-Medhat56/JS-Youtube-downloader",
    siteUrl: "https://youtube-downloader-gn0c.onrender.com/",
  },
  {
    name: "MUN Event website",
    description:
      "A website for a Turkish high school that was hosting a MUN conference. They wanted a website to show their preparations for the conference and provide information about the conference, like: date, location and the team members.",
    imgSrc: "/images/projects/kaptanimun.png",
  },
];
