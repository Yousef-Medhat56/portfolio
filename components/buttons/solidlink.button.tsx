import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import LinkButtonProps from "./props/linkbutton.props";
export default function SolidLinkButton({
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
        color={useColorModeValue("#fff", "brand.blue.dark")}
        bg={"brand.blue.light"}
        borderWidth="2px"
        borderStyle={"solid"}
        borderColor="brand.blue.light"
        _hover={{
          bg: "transparent",
          color: "brand.blue.light",
        }}
      >
        {content}
      </Button>
    </a>
  );
}
