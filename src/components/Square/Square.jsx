import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Square.css";
import {
  Grid,
  Card,
  Image,
  Icon,
  Button,
  Segment,
  Header,
  Container,
} from "semantic-ui-react";

export default function Square() {
  return (
    // <Segment style={{maxWidth:1200}} padded="very">
      <Grid style={{maxWidth:1200}} centered stretched textAlign="justified">
        <Grid.Row centered textAlign="center">
          <Grid.Column width={7} textAlign="center" className="white">
            <Header as="h1">About Me</Header>
            <div className="textAbout">
              A Junior Developer with a background in Mern Stack, management,
              and collegiate sports, I approach each project understanding that
              big achievements take small, precise steps. With my strong problem
              solving skills and a willingness to learn quickly, I bring passion
              for succeeding and offering solutions to colleagues and clients.
            </div>
          </Grid.Column>
          <Grid.Column width={7} textAlign="center" className="white">
          <Header as="h1">Education</Header>
            <ul>
              <li>
                General Assembly: Software Engineer Immersive
              </li>
              <li>
                University of Washington: BA Poli Sci
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="marginTop" verticalAlign="bottom">
          <Grid.Column
            className="white marginTop"
            textAlign="center"
            verticalAlign="middle"
            width={14}
          >
            <Header as="h1">Skills</Header>
            <Image.Group size="tiny">
              <Image src="/Images/htmlB2.png" />
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
    // </Segment>
  );
}
