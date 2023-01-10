import React from "react";

import { Outlet } from "react-router-dom";

import Tabs from "../components/templates/Tabs";

import ApostlesGenesisIcon from "../asset/ApostlesGenesis/ApostlesGenesis_Icon.png";

function ApostlesGenesis() {
  return (
    <>
      <Tabs
        imgsrc={ApostlesGenesisIcon}
        name="Apostles: Genesis"
        link="/Apostles"
      />
      <Outlet />
    </>
  );
}

export default ApostlesGenesis;
