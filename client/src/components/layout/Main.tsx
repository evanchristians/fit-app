import { Stack } from "@chakra-ui/core";
import { Bounds } from "./Bounds";
import React from "react";

interface IMain {}

const Main: React.FC<IMain> = ({ children }) => (
  <Bounds>
    <Stack
      position="relative"
      spacing="1.5rem"
      width="100%"
      pt={[12, "4rem", "6rem"]}
      px="1rem"
    >
      {children}
    </Stack>
  </Bounds>
);

export default Main;
