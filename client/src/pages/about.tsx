import { Divider } from "@chakra-ui/core";
import { SlideFade } from "@chakra-ui/transition";
import React from "react";
import { Hero, SubHeading } from "src/components/modules/Headings";
import Main from "src/components/layout/Main";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Main>
        <SlideFade initialOffset="2px" timeout={300} in={true}>
          {(styles) => <Hero style={{ ...styles }} text="About" />}
        </SlideFade>
        <Divider borderColor="_green50" />

        <SubHeading text="Under construction..." />
      </Main>
    </>
  );
};

export default About;
