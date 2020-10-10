import { Flex } from "@chakra-ui/core";
import React from "react";

interface BoundsProps {}

export const Bounds: React.FC<BoundsProps> = ({ children }) => {
  return (
    <Flex maxWidth="58rem" width="100%" mx="auto" position="relative">
      {children}
    </Flex>
  );
};
