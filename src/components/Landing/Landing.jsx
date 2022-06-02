import React, { useState } from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Landing.css";
import LandingContent from "../LandingContent/LandingContent";
import { Grid, Radio } from "semantic-ui-react"; 
import { useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

export default function Page({ pageID, pageDown, pageUp, secClass, setDarkLight }) {
  const [isDark, setIsDark] = useState(true);

    
  // function handleChange(e){
  //   setDarkLight();
  //   // setIsDark(!isDark)
  //   // console.log(isDark)      
  // }

  const dOrL = isDark ? "section1 flexy" : "section2 flexy"

  return (
    <div id={pageID} className={secClass}>
      <div className="flexy">
      <div className="Title">Daniel Kanczugowski</div>
        <LandingContent />
        <ToggleSwitch handleChange={setDarkLight}/>
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
      </div>
    </div>
  );
}
