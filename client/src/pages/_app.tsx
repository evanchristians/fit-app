import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Head from "next/head";
import { Container } from "src/components/Container";
import NavBar from "src/components/NavBar";
import { NavItems } from "src/lib/Config.NavItems";

import theme from "../theme";

export interface AppProps {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Container>
          <NavBar navItems={NavItems}></NavBar>
          <Component {...pageProps} />
        </Container>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
