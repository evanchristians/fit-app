import { Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

interface IUserNav {}

const UserNav: React.FC<IUserNav> = ({}) => {
  return (
    <Flex ml="auto">
      <NextLink href="/register">
        <Link
          fontSize={18}
          mr={4}
          fontWeight="medium"
          color="white"
        >Register</Link>
      </NextLink>
    </Flex>
  );
};

export default UserNav;
