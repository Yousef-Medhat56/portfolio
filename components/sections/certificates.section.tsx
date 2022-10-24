import React from "react";
import {
  Center,
  Image,
  VStack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import SectionContainer from "../containers/section.container";

export default function CertificateSection() {
  return (
    <SectionContainer title="Certificates" id={"certificates"}>
      <Center>
        <VStack spacing={4}>
          <Image
            src="/images/certificates/nanodegree.png"
            alt="Udacity Advanced Full-Stack Web Dvelopment Nanodegree"
            maxHeight={"450px"}
            fit="cover"
          />
          <Text
            color={useColorModeValue("brand.text.light", "brand.text.dark")}
            textAlign="center"
          >
            Udacity Advanced Full-Stack Web Dvelopment Nanodegree
          </Text>
        </VStack>
      </Center>
    </SectionContainer>
  );
}
