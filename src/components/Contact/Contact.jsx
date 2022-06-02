import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Contact.css";

export default function Page({ pageID, pageDown, pageUp, secClass }) {
  return (
    <div id={pageID} className={secClass}>
        <h1>Contact</h1>
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
    </div>
  );
}
