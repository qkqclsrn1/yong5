import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainDisplay from "./components/MainDisplay";
import Games from "./components/Games"
import Header from "./components/Header";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Header/>
      <MainDisplay />
      {/* <Games /> */}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
