import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../layouts/Main";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mindy Blog</title>
      </Head>
      <main>
        <ChakraProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </main>
    </>
  );
}

export default MyApp;
