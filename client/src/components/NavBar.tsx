import { Flex, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import ToUrl from "src/lib/ToUrl";
import { Bounds } from "./Bounds";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { withRouter } from "next/router";
import { useColorMode } from "@chakra-ui/core";

interface NavItemProps {
  name: string;
  route?: string;
}

interface NavBarProps {
  navItems: NavItemProps[];
}

const NavBar: React.FC<NavBarProps | any> = ({ navItems }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex bg="_green" height={50} p={5} alignItems="center" width="100%">
      <Bounds>
        {navItems.map((item, key) => {
          return (
            <NextLink key={key} href={item.route ?? ToUrl(item.name)}>
              <Link
                // opacity={isDark ? 0.7 : 1}
                fontSize={18}
                mr={4}
                fontWeight="semibold"
                color="white"
              >
                {item.name}
              </Link>
            </NextLink>
          );
        })}
        <DarkModeSwitch />
      </Bounds>
    </Flex>
  );
};

export default withRouter(NavBar);
