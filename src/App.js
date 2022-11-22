import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainDisplay from "./components/MainDisplay";
import Games from "./components/Games"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <MainDisplay />
      <Games />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
