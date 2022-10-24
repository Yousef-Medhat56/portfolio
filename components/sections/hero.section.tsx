import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import MainContainer from "../containers/main.container";
import NextLink from "next/link";

export default function Hero() {
  return (
    <MainContainer>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, lg: 14 }}
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
            A freelancer full-stack web developer. I am very passionate about
            learning anything web-related and applying this knowledge into
            real-world projects.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <NextLink href={"#contact"}>
              <Button
                variant="solid"
                size={"lg"}
                fontWeight={"bold"}
                px={4}
                color={useColorModeValue("#fff", "brand.blue.dark")}
                bg={"brand.blue.light"}
                borderWidth="2px"
                borderStyle={"solid"}
                _hover={{
                  bg: "transparent",
                  color: "brand.blue.light",
                  borderColor: "brand.blue.light",
                }}
              >
                Contact Me
              </Button>
            </NextLink>
            <NextLink href={"#projects"}>
              <Button
                variant="solid"
                size={"lg"}
                fontWeight={"bold"}
                px={4}
                bg={"transparent"}
                borderWidth="2px"
                borderStyle={"solid"}
                borderColor="brand.blue.light"
                color="brand.blue.light"
                _hover={{
                  bg: "brand.blue.light",
                  color: useColorModeValue("#fff", "brand.blue.dark"),
                }}
              >
                View More
              </Button>
            </NextLink>
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
    </MainContainer>
  );
}
