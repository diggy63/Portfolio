import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Page.css";

export default function Page({ pageID, pageDown, pageUp }) {
  return (
    <div id={pageID} className="section1">
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
    </div>
  );
}
