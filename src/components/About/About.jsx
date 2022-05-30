import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import Square from "../Square/Square";
import "./About.css";
import {Grid} from 'semantic-ui-react'

export default function Page({ pageID, pageDown, pageUp }) {
  return (
    <div id={pageID} className="section1">
        <Square />
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
    </div>
  );
}
