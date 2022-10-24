import { Image, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export interface SkillCardProps {
  skillImg: string;
  skillName: string;
}

export default function SkillCard({ skillImg, skillName }: SkillCardProps) {
  return (
    <VStack spacing={3}>
      <Image src={skillImg} alt={skillName} />
      <Text color={useColorModeValue("brand.text.light", "brand.text.dark")}>
        {skillName}
      </Text>
    </VStack>
  );
}
