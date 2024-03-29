import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import LinkButtonProps from "./props/linkbutton.props";
export default function OutlinedLinkButton({
  url,
  content,
  isTargetBlank = false,
}: LinkButtonProps) {
  return (
    <a href={url} target={isTargetBlank ? "_blank" : "_self"} rel="noreferrer">
      <Button
        variant="solid"
        size={"lg"}
        fontWeight={"bold"}
        w="full"
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
        {content}
      </Button>
    </a>
  );
}
