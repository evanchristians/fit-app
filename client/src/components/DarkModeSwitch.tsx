import { IconButton, useColorMode } from "@chakra-ui/core";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      size="xs"
      aria-label=""
      ml="auto"
      icon={isDark ? "sun" : "moon"}
      color={isDark ? "white" : "_green"}
      onClick={toggleColorMode}
      _focus={{ outline: "none" }}
    />
  );
};
