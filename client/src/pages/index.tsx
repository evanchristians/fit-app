import { NetworkStatus, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Tag,
  Text,
  Flex,
} from "@chakra-ui/core";
import { SlideFade } from "@chakra-ui/transition";
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { Hero, SubHeading } from "src/components/Headings";
import Main from "src/components/Main";
import { Sleep } from "src/lib/Sleep";
import { GET } from "src/utils/ApolloClient";

const Index = () => {
  const {
    loading,
    data = { rates: [{ currency: "" }] },
    refetch: _refetch,
    networkStatus,
  } = useQuery(GET, {
    variables: {},
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache",
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);

  const refetch = useCallback(() => {
    setTimeout(() => _refetch(), 0);
  }, [_refetch]);

  useEffect(() => {
    if (networkStatus !== NetworkStatus.refetch) setIsRefetching(false);
  }, [networkStatus]);

  useEffect(() => {
    setIsLoaded(true);
  }, [data]);

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
        <Text color="gray.400" textAlign="center">
          (Without Caching)
        </Text>
        <Text
          textAlign="center"
          fontWeight="medium"
          fontSize={24}
          color="gray.700"
        >
          Dummy GraphQL Currencies
        </Text>
        <Flex
          mt={2}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          p={4}
          borderRadius={2}
          minHeight={190}
        >
          {loading ? (
            <SlideFade initialOffset="2px" timeout={500} in={true}>
              {(styles) => (
                <CircularProgress
                  style={styles}
                  color="_green"
                  isIndeterminate
                />
              )}
            </SlideFade>
          ) : data ? (
            <Box textAlign="center">
              {data.rates.slice(0, 30).map((d, key) => {
                return (
                  <SlideFade
                    initialOffset="2px"
                    timeout={400 + 5 * key}
                    in={isLoaded}
                  >
                    {(styles) => (
                      <Tag
                        style={styles}
                        color="_green"
                        key={key}
                        my={2}
                        mx={2}
                      >
                        {d.currency}
                      </Tag>
                    )}
                  </SlideFade>
                );
              })}
            </Box>
          ) : null}
        </Flex>
        <Box mx="auto" textAlign="center">
          <Button
            bg="_green"
            color="white"
            fontWeight="medium"
            _hover={{
              bg: "_green200",
            }}
            isLoading={isRefetching}
            onClick={async () => {
              setIsRefetching(true);
              setIsLoaded(false);
              await Sleep(600);
              refetch();
              setIsLoaded(true);
            }}
          >
            Refetch
          </Button>
          <Text mt={2} color="gray.400">
            (Similar behaviour to Filtering, Pagination... etc.)
          </Text>
        </Box>
      </Main>
    </>
  );
};

export default Index;
