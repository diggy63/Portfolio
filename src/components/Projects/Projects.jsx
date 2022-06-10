import React, {useState, useEffect} from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Projects.css";
import ProjectSquares from "../../components/ProjectSquares/ProjectSquares"

export default function Page({ pageID, pageDown, pageUp, secClass, isDark }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 600;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const callForSec = isMobile ? secClass + "Mobile" : secClass;

  return (
    <div id={pageID} className={callForSec}>
        <ProjectSquares />
        <Scrollup pageUp={pageUp} isDark={isDark}/>
      <Scrolldown pageDown={pageDown} pageID={pageID} isDark={isDark}/>
    </div>
  );
}
