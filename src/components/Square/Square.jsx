import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Square.css";

export default function Square() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOut="animate__fadeOutLeftBig">
        <div className="sqaureTL">TopLeft</div>
        <div className="sqaureBL">BottomLeft</div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOut="animate__fadeOutRightBig">
        <div className="sqaureTR">TopRight</div>
        <div className="sqaureBR">BottomRight</div>
      </AnimationOnScroll>
    </>
  );
}
