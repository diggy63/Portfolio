import React from "react"
import Landing from "../../components/Landing/Landing"
import About from "../../components/About/About"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"

export default function Home(){
    return( 
    <>
    <Landing pageID={"sec1"} pageDown={"#sec2"}/>
    <About pageID={"sec2"} pageDown={"#sec3"} pageUp={"#sec1"} />
    <Projects pageID={"sec3"} pageDown={"#sec4"} pageUp={"#sec2"}/>
    <Contact pageID={"sec4"} pageUp={"#sec3"}/>
    </>
    )
}