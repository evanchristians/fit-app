import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import withApolloClient from "../utils/WithApollo";
import { ApolloProvider } from "@apollo/react-hooks";
import Head from "next/head";
import { Container } from "src/components/layout/Container";
import NavBar from "src/components/modules/NavBar";
import { NavItems } from "src/configs/NavItems";
import theme from "../theme";

export interface AppProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
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

export default withApolloClient(MyApp);
