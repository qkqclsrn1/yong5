import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Footer from "./components/Footer";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route exact path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
