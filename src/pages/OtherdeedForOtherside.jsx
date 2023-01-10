import React from "react";

import { Outlet } from "react-router-dom";

import Tabs from "../components/templates/Tabs";

import OtherdeedForOthersideIcon from "../asset/OtherdeedForOtherside/Otherdeed_for_Otherside_Icon.png";

function OtherdeedForOtherside() {
  return (
    <>
      <Tabs
        imgsrc={OtherdeedForOthersideIcon}
        name="Otherdeed for Otherside"
        link="/OdForOs"
      />
      <Outlet />
    </>
  );
}

export default OtherdeedForOtherside;
