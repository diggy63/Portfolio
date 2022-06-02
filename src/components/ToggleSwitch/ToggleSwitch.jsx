import React from "react";
import "./ToggleSwitch.css"

export default function toggleSwitch() {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}
