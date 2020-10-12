import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
  mono: `'Poppins', sans-serif`,
};

const breakpoints = ["900px", "1440px"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    _green: "#16A085",
    _green50: "#16A08555",
    _green200: "#149077",
  },
  fonts,
  breakpoints,
};

export default theme;
