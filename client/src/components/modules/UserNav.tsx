import { Flex, Link } from "@chakra-ui/core";
import React from "react";

interface IUserNav {
  onRegister: any;
}

const UserNav: React.FC<IUserNav> = ({ onRegister }) => {
  return (
    <Flex ml="auto">
      <Link
        lineHeight={2}
        onClick={onRegister}
        fontSize={[14, 16, 18]}
        mr={4}
        fontWeight="medium"
        color="white"
      >
        Register
      </Link>
    </Flex>
  );
};

export default UserNav;
