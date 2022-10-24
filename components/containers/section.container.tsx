import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import MainContainer from "./main.container";
import SectionTitle from "../misc/sectiontitle.misc";

export default function SectionContainer({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <MainContainer id={id}>
      <Box py={20}>
        <SectionTitle title={title} />
        {children}
      </Box>
    </MainContainer>
  );
}
