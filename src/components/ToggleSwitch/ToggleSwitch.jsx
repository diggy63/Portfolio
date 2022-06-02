import React from "react";
import "./ToggleSwitch.css"

export default function toggleSwitch({handleChange}) {
     function handleToggle(e){
        //console.log(e.target.checked)
        handleChange(e.target.checked)
    }

  return (
    <label onChange={handleToggle} className="switch">
      <input type="checkbox" />
      <span className="slider round textAlt">Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Light</span>
    </label>
  );
}
