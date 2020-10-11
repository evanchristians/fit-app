import { Flex } from "@chakra-ui/core";
import React from "react";

interface IBounds {}

export const Bounds: React.FC<IBounds> = ({ children }) => {
  return (
    <Flex maxWidth={["58rem", "58rem", "65vw"]} width="100%" mx="auto" position="relative">
      {children}
    </Flex>
  );
};
