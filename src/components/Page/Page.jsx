import React from "react";
import "./Page.css";

export default function Page({ pageID }) {
  return (
    <div id={pageID} className="section1">
      <a href="#sec2">
          <scroll>{pageID}</scroll>
        <div className="scroll"></div>
      </a>
    </div>
  );
}
