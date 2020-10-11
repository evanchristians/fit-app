import { Divider } from "@chakra-ui/core";
import { SlideFade } from "@chakra-ui/transition";
import React from "react";
import { Hero, SubHeading } from "src/components/Headings";
import Main from "src/components/Main";
import { Container } from "../components/Container";

const About = () => {
  return (
    <Container>
      <Main>
        <SlideFade initialOffset="10px" timeout={600} in={true}>
          {(styles) => <Hero text="About" style={{ ...styles }} />}
        </SlideFade>
        <Divider borderColor="_green50" />

        <SubHeading text="Under Construction..." />
      </Main>
    </Container>
  );
};

export default About;
