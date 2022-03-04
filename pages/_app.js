import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/ibm-plex-serif/700.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../layouts/Main";
import theme from "../theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mindy Blog</title>
      </Head>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
