import { Divider } from "@chakra-ui/core";
import { SlideFade } from "@chakra-ui/transition";
import React from "react";
import { Hero, SubHeading } from "src/components/Headings";
import Main from "src/components/Main";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Main>
        <SlideFade initialOffset="2px" timeout={300} in={true}>
          {(styles) => <Hero style={{ ...styles }} text="Contact" />}
        </SlideFade>
        <Divider borderColor="_green50" />

        <SubHeading text="Under construction..." />
      </Main>
    </>
  );
};

export default Contact;
