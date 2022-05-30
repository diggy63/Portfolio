import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./ProjectSquares.css";
import { Grid, Card, Image, Icon, Button, Segment } from "semantic-ui-react";

export default function Square() {
  return (
    <>
      <Grid relaxed>
          
        <Grid.Row textAlign="center">
          <Grid.Column width={8} textAlign="center">
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              animateOut="animate__fadeOutLeftBig"
            >
              <Card centered>
                <Image
                  src="https://i.imgur.com/zNjJfPH.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Frogger</Card.Header>
                  <Card.Description>
                    Simple game made with HTML, CSS, and Vanilla JS
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://diggy63.github.io/FroggerJSStyle/">
                    <Button>View</Button>
                  </a>
                  <a href="https://github.com/diggy63/FroggerJSStyle">
                    <Button>GitHub</Button>
                  </a>
                </Card.Content>
              </Card>
            </AnimationOnScroll>
          </Grid.Column>
          <Grid.Column width={8}>
            <AnimationOnScroll
              animateIn="animate__fadeInRightBig"
              animateOut="animate__fadeOutRightBig"
            >
              <Card centered>
                <Image
                  src="https://i.imgur.com/Tozmyve.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Cocktail Instgram</Card.Header>
                  <Card.Meta>
                    <span className="date">Node.js, Mongoose, Mongodb</span>
                  </Card.Meta>
                  <Card.Description>
                    App where you can share you favorite cocktails and comment
                    and like.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="https://cocktail-lounge-dk.herokuapp.com/">
                    <Button>View</Button>
                  </a>
                  <a href="https://github.com/diggy63/Project-2-SEIR">
                    <Button>GitHub</Button>
                  </a>
                </Card.Content>
              </Card>
            </AnimationOnScroll>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column width={8}>
            <AnimationOnScroll
              animateIn="animate__fadeInLeftBig"
              delay={200}
              animateOut="animate__fadeOutLeftBig"
            >
              <Card centered>
                <Image
                  src="https://i.imgur.com/0QdPndG.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>EventBuds</Card.Header>
                  <Card.Meta>
                    <span className="date">Django, Python, postgreSQL</span>
                  </Card.Meta>
                  <Card.Description>
                    App to track what who is going to what event and find
                    friends.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="https://eventbuds.herokuapp.com/">
                    <Button>View</Button>
                  </a>
                  <a href="https://github.com/diggy63/eventbuds">
                    <Button>GitHub</Button>
                  </a>
                </Card.Content>
              </Card>
            </AnimationOnScroll>
          </Grid.Column>
          <Grid.Column width={8}>
            <AnimationOnScroll
              animateIn="animate__fadeInRightBig"
              delay={200}
              animateOut="animate__fadeOutRightBig"
            >
              <Card centered>
                <Image
                  src="https://i.imgur.com/oRkjwld.png"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Workout Tracker</Card.Header>
                  <Card.Meta>
                    <span className="date">MERN Full-Stack</span>
                  </Card.Meta>
                  <Card.Description>
                    Workout tracker with API excercise information.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a href="https://workouttrackerdk.herokuapp.com/">
                    <Button>View</Button>
                  </a>
                  <a href="https://github.com/diggy63/eventbuds">
                    <Button>GitHub</Button>
                  </a>
                </Card.Content>
              </Card>
            </AnimationOnScroll>
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </>
  );
}