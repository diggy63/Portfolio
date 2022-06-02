import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import Square from "../Square/Square";
import "./About.css";
import {Grid} from 'semantic-ui-react'

export default function Page({ pageID, pageDown, pageUp, secClass }) {
  console.log(secClass)
  return (
    <div id={pageID} className={secClass}>
        <Square />
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
    </div>
  );
}
