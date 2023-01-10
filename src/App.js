import React from "react";
import NavBar from "./components/templates/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OtherdeedForOtherside from "./pages/OtherdeedForOtherside";
import TheSandbox from "./pages/TheSandbox";
import WarRiders from "./pages/WarRiders";
import ApostlesGenesis from "./pages/ApostlesGenesis";
import BYOLand from "./pages/BYOLand";
import NFTs from "./pages/NFTs";
import ForumLayout from "./components/organisms/ForumLayout";
import Introduction from "./components/organisms/Introduction";
import NftCollection from "./components/organisms/NftCollection";
//import MyPage from "./pages/MyPage"
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
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/OdForOs" element={<OtherdeedForOtherside />}>
            <Route index element={<Introduction label={1} />} />
            <Route path="/OdForOs/forum" element={<ForumLayout />} />
            <Route path="/OdForOs/gamenft" element={<NftCollection />} />
          </Route>
          <Route path="/sandbox" element={<TheSandbox />}>
            <Route index element={<Introduction label={2} />} />
            <Route path="/sandbox/forum" element={<ForumLayout />} />
          </Route>
          <Route path="/warriders" element={<WarRiders />}>
            <Route index element={<Introduction label={3} />} />
            <Route path="/warriders/forum" element={<ForumLayout />} />
            <Route path="/warriders/gamenft" element={<NftCollection />} />
          </Route>
          <Route path="/Apostles" element={<ApostlesGenesis />}>
            <Route index element={<Introduction label={4} />} />
            <Route path="/Apostles/forum" element={<ForumLayout />} />
            <Route path="/Apostles/gamenft" element={<NftCollection />} />
          </Route>
          <Route path="/BYOLand" element={<BYOLand />}>
            <Route index element={<Introduction label={5} />} />
            <Route path="/BYOLand/forum" element={<ForumLayout />} />
            <Route path="/BYOLand/gamenft" element={<NftCollection />} />
          </Route>

          {/* <Route path="/myPage" element={<MyPage/>} /> */}
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
