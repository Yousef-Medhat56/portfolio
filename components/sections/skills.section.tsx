import React from "react";
import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";
import SkillCard, { SkillCardProps } from "../cards/skill.card";
import SectionContainer from "../containers/section.container";

export default function SkillSection() {
  return (
    <SectionContainer title="My Skills" id={"skills"}>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(7, 1fr)" }}
        gap={6}
        mx={{ lg: 14 }}
      >
        {skills.map((skill) => (
          <GridItem w="100%" key={skill.skillName}>
            <SkillCard skillName={skill.skillName} skillImg={skill.skillImg} />
          </GridItem>
        ))}
      </Grid>
    </SectionContainer>
  );
}

const skills: SkillCardProps[] = [
  { skillName: "JavaScript", skillImg: "/images/skills/javascript.svg" },
  { skillName: "TypeScript", skillImg: "/images/skills/typescript.svg" },
  { skillName: "React", skillImg: "/images/skills/react.svg" },
  { skillName: "NextJs", skillImg: "/images/skills/nextjs.svg" },
  { skillName: "NodeJs", skillImg: "/images/skills/nodejs.svg" },
  { skillName: "Postgres", skillImg: "/images/skills/postgresql.svg" },
  { skillName: "Git", skillImg: "/images/skills/git.svg" },
];
