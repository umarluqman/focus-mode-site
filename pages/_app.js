import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "react-modal-video/scss/modal-video.scss";
import dynamic from "next/dynamic";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

// const CrispWithNoSSR = dynamic(() => import("../components/Crisp"), {
//   ssr: false,
// });

function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />
      {/* <CrispWithNoSSR /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
