import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import MainContainer from "./main.container";
import SectionTitle from "../misc/sectiontitle.misc";
import ViewOnScroll from "./motion.container";

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
        <ViewOnScroll>
          <SectionTitle title={title} />
          {children}
        </ViewOnScroll>
      </Box>
    </MainContainer>
  );
}
