import React from "react";
import "./Scrollup.css"
import { useNavigate } from "react-router-dom";

export default function Scrollup({pageUp, isDark}){
    const checking = isDark ? "scrollUpDark" : "scrollUp";
    const navigate = useNavigate();
    return(
        <>
        {pageUp ?
        <a href={pageUp}>
        <div className={checking}></div>
        </a>
         : ""}
         </>
    )
}