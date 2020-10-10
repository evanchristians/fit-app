import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import Head from "next/head";

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
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
