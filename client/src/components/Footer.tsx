import { Flex } from "@chakra-ui/core";
import React from "react";

interface IFooter {}

export const Footer: React.FC<IFooter> = ({ children }) => (
  <Flex as="footer" py={8}>
    {children}
  </Flex>
);
