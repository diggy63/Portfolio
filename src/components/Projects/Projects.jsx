import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Projects.css";
import ProjectSquares from "../../components/ProjectSquares/ProjectSquares"

export default function Page({ pageID, pageDown, pageUp, secClass, isDark }) {
  return (
    <div id={pageID} className={secClass}>
        <ProjectSquares />
        <Scrollup pageUp={pageUp} isDark={isDark}/>
      <Scrolldown pageDown={pageDown} pageID={pageID} isDark={isDark}/>
    </div>
  );
}
