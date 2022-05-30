import React from "react";
import "./Scrollup.css"
import { useNavigate } from "react-router-dom";

export default function Scrollup({pageUp}){
    const navigate = useNavigate();
    return(
        <>
        {pageUp ?
        <a href={pageUp}>
        <div className="scrollUp"></div>
        </a>
         : ""}
         </>
    )
}