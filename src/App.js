import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainDisplay from "./components/MainDisplay";
import Games from "./components/Games"
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      {/* <Header/> */}
      {/* <MainDisplay /> *
      /}
      {/* <Games /> */}
      <SearchResult />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
