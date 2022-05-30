import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Square.css"

export default function Square() {

  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="sqaureTL">
      TopLeft
      </div>
      <div className="sqaureBL">
      BottomLeft
      </div>
    </AnimationOnScroll>
  );
}
