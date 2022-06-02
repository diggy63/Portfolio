import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Projects.css";
import ProjectSquares from "../../components/ProjectSquares/ProjectSquares"

export default function Page({ pageID, pageDown, pageUp, secClass }) {
  return (
    <div id={pageID} className={secClass}>
        <ProjectSquares />
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
    </div>
  );
}
