import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ShoppingCartProvider>
        <ChakraProvider>
          <Head>
            <meta charSet="UTF-8" />
            <title>St. George Pathfinders</title>
            <meta name="application-name" content="LA Lager" />
            <meta name="keywords" content="scouts" />
            <meta name="author" content="Nikita Malinovsky, Sasha Malinovsky" />
            <meta name="description" content="LA Lager" />
            <meta property="image" content="/favicon.png" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            <meta property="og:title" content="LA Lager" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="LA Lager" />
            <meta property="og:image" content="/landing_page.png" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </ShoppingCartProvider>
    </SessionProvider>
  );
}
