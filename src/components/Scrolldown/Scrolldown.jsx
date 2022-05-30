import React from "react";
import "./Scrolldown.css"

export default function Scrolldown({pageDown, pageID}){
    return(
        <>
        {pageDown ?
      <a href={pageDown}>
        <div className="scroll"></div>
      </a> : ""}
      </>
    )
}