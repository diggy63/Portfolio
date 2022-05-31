import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Square.css";
import { Grid, Card, Image, Icon, Button, Segment } from "semantic-ui-react";

export default function Square() {
  return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column>Left</Grid.Column>
          <Grid.Column>Right</Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>Bottom</Grid.Column>
        </Grid.Row>
       {/* <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOut="animate__fadeOutLeftBig">
        <div className="sqaureTL">TopLeft</div>
        <div className="sqaureBL">BottomLeft</div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOut="animate__fadeOutRightBig">
        <div className="sqaureTR">TopRight</div>
        <div className="sqaureBR">BottomRight</div>
      </AnimationOnScroll> */}
      </Grid>
  );
}

