import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
  gray: {
    800: "#001E3D",
  },
  brand: {
    blue: {
      light: "#005FB8",
      dark: "#001E3D",
      hover: "#ECF5FF",
    },
    text: {
      light: "#828281",
      dark: "#BDCEE0",
    },
    border: {
      light: "#d4dfe1",
      dark: "#39424A",
    },
  },
};

//Color Mode
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = { body: "Rubik", heading: "Rubik" };
const theme = extendTheme({ colors, config, fonts });

export default theme;
