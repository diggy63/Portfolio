import React from "react";
import "./Scrolldown.css"

export default function Scrolldown({pageDown, pageID, isDark}){
  const checking = isDark ? "scrollDark" : "scroll";
    return(
        <>
        {pageDown ?
      <a href={pageDown}>
        <div className={checking}></div>
      </a> : ""}
      </>
    )
}