import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
  mono: `'Poppins', sans-serif`,
};

const breakpoints = ["40em", "52em", "64em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    _green: "#16A085",
    _green50: "#16A08555",
  },
  fonts,
  breakpoints,
};

export default theme;
