import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SearchResult from "../components/SearchResult";

function Home() {
  return (
    <>
      <SearchResult />
    </>
  );
}

export default Home;
