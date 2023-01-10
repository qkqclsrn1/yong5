import React from "react";

import { Outlet } from "react-router-dom";

import Tabs from "../components/templates/Tabs";

import WarRidersIcon from "../asset/WarRiders/WarRiders_Icon.png";

function WarRiders() {
  return (
    <>
      <Tabs imgsrc={WarRidersIcon} name="War Riders" link ="/warriders"/>
      <Outlet />
    </>
  );
}

export default WarRiders;
