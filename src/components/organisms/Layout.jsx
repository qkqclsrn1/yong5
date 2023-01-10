import { Outlet, Link } from "react-router-dom";

import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Tabs from "./Tabs";

function Layout() {
  return (
    <>
      <NavBar />
      <Tabs />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
