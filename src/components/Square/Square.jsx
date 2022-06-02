import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

{/* Performs similarly to componentDidMount in classes */}
useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 600;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
}, [isMobile]);
  
  const iconClass = isMobile ? 'mini': 'tiny';
  return (
    // <Segment style={{maxWidth:1200}} padded="very">
    <Grid style={{ maxWidth: 1200 }} centered stretched textAlign="justified">
      <Grid.Row centered textAlign="center">
        
        <Grid.Column width={7} textAlign="center">
        <AnimationOnScroll
        animateIn="animate__rotateInDownLeft"
        animateOut="animate__fadeOutLeftBig"
        >
          <div className="white">
          <div className="title">About Me</div> 
          <p>
            A Junior Developer with a background in Mern Stack, management, and
            collegiate sports, I approach each project understanding that big
            achievements take small, precise steps. With my strong problem
            solving skills and a willingness to learn quickly, I bring passion
            for succeeding and offering solutions to colleagues and clients.
          </p>
          </div>
          </AnimationOnScroll>

        </Grid.Column>
        
        <Grid.Column width={7} textAlign="center">
        <AnimationOnScroll
        animateIn="animate__rotateInDownRight"
        animateOut="animate__fadeOutLeftBig"
        >
           <div className="white">
          <div className="title">Education</div>
            <p>General Assembly: Software Engineer Immersive</p>
            <p>University of Washington: BA Poli Sci</p>
            </div>
          </AnimationOnScroll>
        </Grid.Column>
        
      </Grid.Row>
      <Grid.Row stretched className="marginTop" verticalAlign="bottom">
      <AnimationOnScroll
            animateIn="animate__fadeInUpBig"
            animateOut="animate__fadeOutLeftBig"
          >
        <Grid.Column
          className="white marginTop"
          textAlign="center"
          verticalAlign="middle"
          width={14}
        >
          
            <div className="title">Skills</div>
            <Image.Group size={iconClass}>
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
        </AnimationOnScroll>
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
