import React from "react";
import NavBar from "./components/templates/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import NFTs from "./pages/NFTs";
import Footer from "./components/templates/Footer";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/nfts" element={<NFTs />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
