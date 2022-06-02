import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Landing.css";
import LandingContent from "../LandingContent/LandingContent";
import { Grid, Radio } from "semantic-ui-react"; 

export default function Page({ pageID, pageDown, pageUp }) {
  function handleChange(){
    console.log("clcik")
  }

  return (
    <div id={pageID} className="section1 flexy">
      <div className="Title">Daniel Kanczugowski</div>
        <LandingContent />
        <Radio toggle onChange={handleChange}/>
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
    </div>
  );
}
