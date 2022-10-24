import React from "react";
import {
  Center,
  Image,
  VStack,
  useColorModeValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import SectionContainer from "../containers/section.container";

export default function EducationSection() {
  return (
    <SectionContainer title="Education" id={"education"}>
      <Center px={4}>
        <VStack spacing={5} alignItems="start">
          <Image
            src="/images/education/zu-logo.png"
            alt="Zagazig University Logo"
            w="80px"
            h="80px"
            borderRadius={"50%"}
          />
          <Heading fontSize={"2xl"}>Zagazig University</Heading>

          <Heading fontSize={"xl"}>
            Bachelor&apos;s Degree in Computer Science
          </Heading>
          <Text
            color={useColorModeValue("brand.text.light", "brand.text.dark")}
          >
            2022 - present
          </Text>
        </VStack>
      </Center>
    </SectionContainer>
  );
}
