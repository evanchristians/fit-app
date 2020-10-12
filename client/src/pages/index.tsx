import { Divider } from "@chakra-ui/core";
import { SlideFade } from "@chakra-ui/transition";
import React from "react";
import { Hero, SubHeading } from "src/components/Headings";
import Main from "src/components/Main";

const Index = () => {
  return (
    <Main>
      <SlideFade initialOffset="2px" timeout={300} in={true}>
        {(styles) => <Hero style={{ ...styles }} text="Fit-App" />}
      </SlideFade>
      <Divider borderColor="_green50" />

      <SubHeading text="Under construction..." />
    </Main>
  );
};

export default Index;
