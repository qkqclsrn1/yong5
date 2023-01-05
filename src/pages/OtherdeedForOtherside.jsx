import React from "react";

import { Outlet, Link } from "react-router-dom";


import Tabs from "../components/templates/Tabs";
import Introduction from "../components/organisms/Introduction";

import OtherdeedForOthersideIcon from "../asset/Otherdeed_for_Otherside_Icon.png";


function OtherdeedForOtherside() {
  return (
    <>
   

      <Tabs imgsrc={OtherdeedForOthersideIcon} name="Otherdeed for Otherside"/>
      <Introduction />

    </>
  );
}

export default OtherdeedForOtherside;
