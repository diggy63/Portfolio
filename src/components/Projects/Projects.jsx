import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Projects.css";
import ProjectSquares from "../../components/ProjectSquares/ProjectSquares"

export default function Page({ pageID, pageDown, pageUp }) {
  return (
    <div id={pageID} className="section1">
        <ProjectSquares />
        <Scrollup pageUp={pageUp}/>
      <Scrolldown pageDown={pageDown} pageID={pageID}/>
    </div>
  );
}
