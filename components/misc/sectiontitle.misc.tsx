import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Box w={"full"} mb={16}>
      <Heading
        color={useColorModeValue("brand.blue.dark", "white")}
        textAlign={"center"}
        position="relative"
        w={"fit-content"}
        margin="auto"
        _before={{
          content: `""`,
          position: "absolute",
          bottom: "-12px",
          w: "50%",
          h: "5px",
          bg: "brand.blue.light",
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
