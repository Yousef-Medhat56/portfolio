import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import OutlinedLinkButton from "../buttons/outlinedlink.button";
import SolidLinkButton from "../buttons/solidlink.button";

export interface ProjectCardProps {
  imgSrc: string;
  name: string;
  description: string;
  siteUrl?: string;
  codeUrl?: string;
}

export default function ProjectCard({
  imgSrc,
  name,
  description,
  siteUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Center h={"100%"}>
      <Box
        // maxW={"445px"}
        h={"100%"}
        w={"full"}
        bg={"transparent"}
        rounded={"md"}
        p={5}
        overflow={"hidden"}
        border="1px"
        borderColor={useColorModeValue(
          "brand.border.light",
          "brand.border.dark"
        )}
      >
        <Box bg={"transparent"} mt={-6} mx={-6} mb={8} pos={"relative"}>
          <Image
            src={imgSrc}
            alt={name}
            w="full"
            fit={"cover"}
            maxHeight="280px"
          />
        </Box>
        <Stack spacing={5}>
          <Heading
            color={useColorModeValue("brand.blue.dark", "white")}
            fontSize={"2xl"}
          >
            {name}
          </Heading>
          <Text
            color={useColorModeValue("brand.text.light", "brand.text.dark")}
            lineHeight={"28px"}
          >
            {description}
          </Text>
        </Stack>
        {siteUrl || codeUrl ? (
          <Stack mt={7} mb={2} direction={"row"} spacing={4} align={"center"}>
            {siteUrl && <SolidLinkButton url={siteUrl} content="Visit Site" />}
            {codeUrl && (
              <OutlinedLinkButton url={codeUrl} content="View Code" />
            )}
          </Stack>
        ) : (
          <Box mb={6} />
        )}
      </Box>
    </Center>
  );
}
