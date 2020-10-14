import { Divider } from "@chakra-ui/core";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { SlideFade } from "@chakra-ui/transition";
import React from "react";
import { Hero, SubHeading } from "src/components/modules/Headings";
import Main from "src/components/layout/Main";

const Error = () => {
  return (
    <Main>
      <SlideFade initialOffset="2px" timeout={300} in={true}>
        {(styles) => <Hero text="404" style={{ ...styles }} />}
      </SlideFade>
      <Divider borderColor="_green50" />

      <SubHeading text="Sorry, this page does not exist">
        <WarningTwoIcon boxSize={[26, 32, "2vw"]} color="red.500" mr={22} />
      </SubHeading>
    </Main>
  );
};

export default Error;
