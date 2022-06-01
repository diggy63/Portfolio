import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Square.css";
import { Grid, Card, Image, Icon, Button, Segment, Header } from "semantic-ui-react";

export default function Square() {
  return (
    <Grid centered textAlign="justified">
      <Grid.Row>
        <Grid.Column>Left</Grid.Column>
        <Grid.Column>Right</Grid.Column>
      </Grid.Row>
      <Grid.Row stretched verticalAlign="bottom">
        <Grid.Column className="white" textAlign="center" verticalAlign="middle">
          <Header as="h1">Skills</Header>
            <Image.Group size="tiny">
              <Image src="/Images/htmlB2.png" />
              Html
              <Image src="/Images/css-3B.png" />
              Css
              <Image src="/Images/java-script.png" />
              <Image src="/Images/atom.png" />
              <Image src="/Images/nodejsB.png" />
              <Image src="/Images/mongodb.png" />
              <Image src="/Images/python.png" />
              <Image src="/Images/django.png" />
              <Image src="/Images/postgresql.png" />
            </Image.Group>
        </Grid.Column>
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
