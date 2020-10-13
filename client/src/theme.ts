import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = {
  heading: `'IBM Plex Sans', sans-serif`,
  body: `'IBM Plex Sans', sans-serif`,
  mono: `'IBM Plex Sans', sans-serif`,
};

const breakpoints = ["900px", "1440px"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    _green: "#149077",
    _green50: "#14907755",
    _green200: "#117e68",
  },
  fonts,
  breakpoints,
};

export default theme;
