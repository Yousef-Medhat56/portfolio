import React from "react";
import { Center, VStack, Heading, HStack, Icon } from "@chakra-ui/react";
import SectionContainer from "../containers/section.container";
import {
  GithubIcon,
  GmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../icons/socialmedia.icon";

export default function ContactSection() {
  return (
    <SectionContainer title="Contact Me" id={"contact"}>
      <Center>
        <VStack spacing={6}>
          <Heading fontSize={"xl"}>Feel Free To Ask Me Anything: </Heading>
          <HStack spacing={12}>
            {socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  as={link.icon}
                  w={"48px"}
                  h={"48px"}
                  color="#868E96"
                  fill="#868E96"
                  _hover={{
                    fill: "brand.blue.light",
                    color: "brand.blue.light",
                  }}
                />
              </a>
            ))}
          </HStack>
        </VStack>
      </Center>
    </SectionContainer>
  );
}

const socialLinks = [
  { icon: LinkedinIcon, url: "https://www.linkedin.com/in/yousef-medhat56/" },
  { icon: TwitterIcon, url: "https://twitter.com/Yousef_Medhat56" },
  { icon: GithubIcon, url: "https://github.com/Yousef-Medhat56" },
  { icon: GmailIcon, url: "mailto:yousef.medhat564@gmail.com" },
];
