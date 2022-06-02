import React, { useState } from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Landing.css";
import LandingContent from "../LandingContent/LandingContent";
import { Grid, Radio } from "semantic-ui-react";
import { useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Page({
  pageID,
  pageDown,
  pageUp,
  secClass,
  setDarkLight,
  isDark,
}) {
  console.log(isDark);
  const checkingDL = isDark
    ? { title: "TitleDark", fontSize: "fontSize50Dark" }
    : { title: "Title", fontSize: "fontSize50" };
  console.log(checkingDL, "checking");
  return (
    <div id={pageID} className={secClass}>
      <div className="flexy">
        <div className={checkingDL.title}>Daniel Kanczugowski</div>
        <LandingContent fontSize={checkingDL.fontSize}/>
        <ToggleSwitch handleChange={setDarkLight} />
        <Scrollup pageUp={pageUp} isDark={isDark} />
        <Scrolldown pageDown={pageDown} pageID={pageID} isDark={isDark} />
      </div>
    </div>
  );
}
