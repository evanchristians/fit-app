import { Divider, CircularProgress, Box, Tag, Text, Flex } from "@chakra-ui/core";
import { SlideFade } from "@chakra-ui/transition";
import Head from "next/head";
import React from "react";
import { Hero, SubHeading } from "src/components/modules/Headings";
import Main from "src/components/layout/Main";
import { useUsersQuery } from "src/generated/graphql";
import { ErrorMessage } from "formik";

const Index = () => {
  const { data, loading, error } = useUsersQuery();
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
        {loading ? (
          <SlideFade initialOffset="2px" timeout={500} in={true}>
            {(styles) => (
              <CircularProgress style={styles} color="_green" isIndeterminate />
            )}
          </SlideFade>
        ) : data ? (
          <Box textAlign="center">
            {data.users.map((d, key) => {
              return (
                <SlideFade
                  initialOffset="2px"
                  timeout={400 + 5 * key}
                  in={true}
                >
                  {(styles) => (
                    <Tag size="sm" style={styles} key={d.id} my={1} mx={1}>
                      {d.firstName} {d.lastName}
                    </Tag>
                  )}
                </SlideFade>
              );
            })}
          </Box>
        ) : error ? (
          <Flex justifyContent="center">
            <Text bg="red.100" py={4} px={10} mt={6} borderRadius={12} color="red.800" fontSize={18}>
              {error.message}
            </Text>
          </Flex>
        ) : (
          <Text>No Results</Text>
        )}
      </Main>
    </>
  );
};

export default Index;
