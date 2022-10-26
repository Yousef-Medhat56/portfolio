import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import MainContainer from "../containers/main.container";
export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <MainContainer>
      <IconButton
        variant="solid"
        aria-label="scroll to top button"
        colorScheme={"blue"}
        fontSize="20px"
        pos={"fixed"}
        bottom={"40px"}
        right={"30px"}
        display={visible ? "inline" : "none"}
        icon={<ArrowUpIcon />}
        bg={"brand.blue.light"}
        color="white"
        onClick={scrollToTop}
      />
    </MainContainer>
  );
}
