import { Divider, Text } from "@chakra-ui/core";
import React from "react";
import { Main } from "src/components/Main";
import NavBar from "src/components/NavBar";
import { NavItems } from "src/lib/Config.NavItems";
import { Container } from "../components/Container";

const Index = () => {
  return (
    <Container>
      <NavBar navItems={NavItems} />
      <Main>
        <Text
          color="_green"
          textAlign="center"
          fontSize="8vw"
          fontWeight="bold"
        >
          Fit-App
        </Text>
        <Divider borderColor="_green50" />
        <Text
          color="_green"
          textAlign="center"
          fontSize="2vw"
          fontWeight="bold"
        >
          Under Construction...
        </Text>
      </Main>
    </Container>
  );
};

export default Index;
