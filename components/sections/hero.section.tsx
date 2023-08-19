import {
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import OutlinedLinkButton from "../buttons/outlinedlink.button";
import SolidLinkButton from "../buttons/solidlink.button";
import MainContainer from "../containers/main.container";
import ViewOnScroll from "../containers/motion.container";

export default function Hero() {
  return (
    <MainContainer>
      <ViewOnScroll>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          pt={16}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 6, md: 7 }}>
            <Heading
              lineHeight={1.4}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} mb={4}>
                Hi👋
              </Text>
              <br />
              <Text as={"span"}>
                I&apos;m{" "}
                <Text as={"span"} color={"brand.blue.light"}>
                  Yousef Medhat
                </Text>
              </Text>
            </Heading>
            <Text
              color={useColorModeValue("brand.text.light", "brand.text.dark")}
              fontSize={"md"}
              lineHeight="32px"
              maxW={"450px"}
            >
              A full-stack web developer. I build and maintain high-quality
              websites and web applications. I am passionate about learning new
              technologies and improving my skills everyday.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <SolidLinkButton url="#contact" content="Contact Me" />
              <OutlinedLinkButton url="#projects" content="View More" />
            </Stack>
          </Stack>
          <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={{ base: "90%", md: "80%", lg: "85%", xl: "80%" }}
              src={"/images/welcome.svg"}
            />
          </Flex>
        </Stack>
      </ViewOnScroll>
    </MainContainer>
  );
}
