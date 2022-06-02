import React, {useState} from "react"
import Landing from "../../components/Landing/Landing"
import About from "../../components/About/About"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"
import "./Home.css"

export default function Home(){
    const [secClass, setSecClass] = useState("section1")
    const [isDark, setIsDark] = useState(false)
    function setDarkLight(booVal){
        
        const changeClass = booVal ? "section2" : "section1";
        const darkOrLight = booVal ? true : false;
        setSecClass(changeClass);
        setIsDark(booVal);
    }
    return( 
    <>
    <Landing pageID={"sec1"} pageDown={"#sec2"} secClass={secClass} setDarkLight={setDarkLight} isDark={isDark}/>
    <About pageID={"sec2"} pageDown={"#sec3"} pageUp={"#sec1"} secClass={secClass} isDark={isDark}/>
    <Projects pageID={"sec3"} pageDown={"#sec4"} pageUp={"#sec2"} secClass={secClass} isDark={isDark}/>
    <Contact pageID={"sec4"} pageUp={"#sec3"} secClass={secClass} isDark={isDark}/>
    </>
    )
}