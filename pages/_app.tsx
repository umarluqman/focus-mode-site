import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../theme";
import "react-modal-video/scss/modal-video.scss";
import dynamic from "next/dynamic";

const CrispWithNoSSR = dynamic(() => import("../components/Crisp"), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <CrispWithNoSSR />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
