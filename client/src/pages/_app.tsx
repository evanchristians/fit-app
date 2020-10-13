import { ApolloProvider } from "@apollo/client";
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import Head from "next/head";
import { Container } from "src/components/Container";
import NavBar from "src/components/NavBar";
import { NavItems } from "src/lib/Config.NavItems";
import { apolloClient } from "src/utils/ApolloClient";
import theme from "../theme";

export interface AppProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Container>
            <NavBar navItems={NavItems}></NavBar>
            <Component {...pageProps} />
          </Container>
        </ColorModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
