import NextLink from "next/link";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon } from "@chakra-ui/icons";
import MoonOutlineIcon from "../icons/moon.icon";
import MainContainer from "../containers/main.container";
import NextChakraImg from "../misc/image.misc";
import Headroom from "react-headroom";
export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Headroom style={{ maxHeight: "70px" }}>
      <Box bg={useColorModeValue("white", "brand.blue.dark")}>
        <MainContainer>
          <Flex
            color={useColorModeValue("brand.text.light", "brand.text.dark")}
            minH={"60px"}
            align={"center"}
          >
            <Flex
              flex={{ lg: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", lg: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                color={useColorModeValue("brand.text.light", "brand.text.dark")}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
              <NextLink href="/">
                <NextChakraImg
                  src={"/images/logo.svg"}
                  height={70}
                  width={170}
                  alt="Yousef Medhat Logo"
                />
              </NextLink>
            </Flex>

            <Flex display={{ base: "none", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
            <Button
              onClick={toggleColorMode}
              bg="transparent"
              ml={{ base: 0, lg: 4 }}
              _hover={{
                bg: "brand.blue.hover",
                color: "brand.blue.light",
              }}
            >
              {colorMode === "light" ? <MoonOutlineIcon /> : <SunIcon />}
            </Button>
          </Flex>

          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </MainContainer>
      </Box>
    </Headroom>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("brand.text.light", "brand.text.dark");
  const linkHoverColor = "brand.blue.light";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            py={2}
            px="10px"
            borderRadius={3}
            href={navItem.href ?? "#"}
            fontSize={"md"}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
              bg: "brand.blue.hover",
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ lg: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Text
        py={2}
        as={Link}
        href={href ?? "#"}
        fontWeight={600}
        color={useColorModeValue("brand.text.light", "brand.text.dark")}
        _hover={{
          textDecoration: "none",
        }}
      >
        {label}
      </Text>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Certificates",
    href: "#certificates",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
