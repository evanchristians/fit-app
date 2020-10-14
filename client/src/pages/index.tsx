import { Divider } from "@chakra-ui/core";
import { SlideFade } from "@chakra-ui/transition";
import Head from "next/head";
import React from "react";
import { Hero, SubHeading } from "src/components/modules/Headings";
import Main from "src/components/layout/Main";

const Index = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Main>
        <SlideFade initialOffset="2px" timeout={300} in={true}>
          {(styles) => <Hero style={{ ...styles }} text="Fit-App" />}
        </SlideFade>
        <Divider borderColor="_green50" />

        <SubHeading text="Data Fetch Test" />
      </Main>
    </>
  );
};

export default Index;
