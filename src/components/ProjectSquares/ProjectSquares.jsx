import React, { useEffect, useState } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./ProjectSquares.css";
import {
  Grid,
  Card,
  Image,
  Icon,
  Button,
  Segment,
  Header,
} from "semantic-ui-react";

export default function Square({isDark}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  let color = ''
  let invert = false
  if(isDark){
    color = 'grey'
    invert = true
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 600;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const rowCols = isMobile ? 1 : 4;

  if (isMobile) {
    return (
      <Grid centered className="margintop">
        <Grid.Row>
          <div className="headsMobile">
            <Header textAlign="center">
              <Header.Content>Projects</Header.Content>
            </Header>
          </div>
        </Grid.Row>
        <Grid.Row textAlign="center" columns={rowCols}>
          <Grid.Column textAlign="center">
            <Card centered>
              <Image centered src="https://i.imgur.com/zNjJfPH.png" wrapped />
              <Card.Content>
                <Card.Header>Frogger</Card.Header>
                <Card.Description>
                  Simple game made with HTML, CSS, and Vanilla JS
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="https://diggy63.github.io/FroggerJSStyle/">
                  <Button size="mini">View</Button>
                </a>
                <a href="https://github.com/diggy63/FroggerJSStyle">
                  <Button size="mini">GitHub</Button>
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Card centered>
              <Image src="https://i.imgur.com/Tozmyve.jpg" wrapped />
              <Card.Content>
                <Card.Header>Cocktail Instgram</Card.Header>
                <Card.Meta>
                  <span className="date">Node.js, Mongoose, Mongodb</span>
                </Card.Meta>
                <Card.Description>
                  App where you can share you favorite cocktails and comment and
                  like.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="https://cocktail-lounge-dk.herokuapp.com/">
                  <Button size="mini">View</Button>
                </a>
                <a href="https://github.com/diggy63/Project-2-SEIR">
                  <Button size="mini">GitHub</Button>
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Card centered>
              <Image src="https://i.imgur.com/0QdPndG.jpg" wrapped ui={false} />
              <Card.Content>
                <Card.Header>EventBuds</Card.Header>
                <Card.Meta>
                  <span className="date">Django, Python, postgreSQL</span>
                </Card.Meta>
                <Card.Description>
                  App to track what who is going to what event and find friends.
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
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Card centered className="white">
              <Image src="https://i.imgur.com/oRkjwld.png" wrapped ui={false} />
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  return (
    <Grid centered>
      <Grid.Row centered columns={1}>
        <Grid.Column>
          <Header as="h1" textAlign="center" color={color} inverted={invert} dividing>
            Projects
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={5}>
        <Grid.Column>
          <Card>
            <Image src="/Images/FroggerResize.png" wrapped ui={true} />
            <Card.Content>
              <Card.Header>Frogger </Card.Header>
              <Card.Meta>
                <span className="date">JS Game</span>
              </Card.Meta>
              <Card.Description>
                Simple JS Game Frogger demonstrating Manipulation of DOM without
                JS Framework. Built from Nastalgia.
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
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="/Images/CocktailsResize.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Cocktail Instagram</Card.Header>
              <Card.Meta>
                <span className="date">Node.js Express MongoDB</span>
              </Card.Meta>
              <Card.Description>
                Node.Js Express app using MongoDB for the Database which allows
                you to post your favorite Cocktails.
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
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="/Images/EventBudsResize.jpg" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Event Buds</Card.Header>
              <Card.Meta>
                <span className="date">Django Python PostgreSQL</span>
              </Card.Meta>
              <Card.Description>
                Django App ment for you to connect with others going to the same
                event as you using the ticketmater API.
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
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="/Images/WorkoutResize.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Workout Tracker</Card.Header>
              <Card.Meta>
                <span className="date">MERN Stack</span>
              </Card.Meta>
              <Card.Description>
                Full Mern Stack App for Tracking Workouts using backend as API
                aswell as the werger Workout API
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
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="/Images/pResize.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Pathfinding React App</Card.Header>
              <Card.Meta>
                <span className="date">React</span>
              </Card.Meta>
              <Card.Description>
                Stand Alone React App the demontrates pathfinding algorithms
                like A star and Dijkstra's.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="https://diggy63.github.io/PathfinderReact/">
                <Button>View</Button>
              </a>
              <a href="https://github.com/diggy63/PathfinderReact">
                <Button>GitHub</Button>
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    // <div className="gridControl">
    //   <Grid style={{ maxWidth: 1600 }} centered className="margintop">
    //     <Grid.Row stretched>
    //     <AnimationOnScroll
    //           animateIn="animate__fadeIn"
    //           delay={1000}
    //           animateOut="animate__fadeIn"
    //         >
    //       <div className="heads">
    //           Projects
    //       </div>
    //       </AnimationOnScroll>
    //       </Grid.Row>
    //     <Grid.Row textAlign="center" columns={rowCols}>

    //       <Grid.Column stretched textAlign="center">
    //         <AnimationOnScroll
    //           animateIn="animate__fadeInLeftBig"
    //           delay={200}
    //           animateOut="animate__fadeOutLeftBig"
    //         >
    //           <Card centered>
    //             <Image
    //               src="https://i.imgur.com/zNjJfPH.png"
    //               wrapped
    //               ui={false}
    //             />
    //             <Card.Content>
    //               <Card.Header>Frogger</Card.Header>
    //               <Card.Description>
    //                 Simple game made with HTML, CSS, and Vanilla JS
    //               </Card.Description>
    //             </Card.Content>
    //             <Card.Content extra>
    //               <a href="https://diggy63.github.io/FroggerJSStyle/">
    //                 <Button>View</Button>
    //               </a>
    //               <a href="https://github.com/diggy63/FroggerJSStyle">
    //                 <Button>GitHub</Button>
    //               </a>
    //             </Card.Content>
    //           </Card>
    //         </AnimationOnScroll>
    //       </Grid.Column>

    //       <Grid.Column textAlign="center">
    //         <AnimationOnScroll
    //           animateIn="animate__fadeInLeftBig"
    //           animateOut="animate__fadeOutLeftBig"
    //         >
    //           <Card centered>
    //             <Image
    //               src="https://i.imgur.com/Tozmyve.jpg"
    //               wrapped
    //               ui={false}
    //             />
    //             <Card.Content>
    //               <Card.Header>Cocktail Instgram</Card.Header>
    //               <Card.Meta>
    //                 <span className="date">Node.js, Mongoose, Mongodb</span>
    //               </Card.Meta>
    //               <Card.Description>
    //                 App where you can share you favorite cocktails and comment
    //                 and like.
    //               </Card.Description>
    //             </Card.Content>
    //             <Card.Content extra>
    //             <a href="https://cocktail-lounge-dk.herokuapp.com/">
    //                 <Button>View</Button>
    //               </a>
    //               <a href="https://github.com/diggy63/Project-2-SEIR">
    //                 <Button>GitHub</Button>
    //               </a>
    //             </Card.Content>
    //           </Card>
    //         </AnimationOnScroll>
    //       </Grid.Column>
    //       <Grid.Column textAlign="center">
    //         <AnimationOnScroll
    //           animateIn="animate__fadeInRightBig"
    //           animateOut="animate__fadeOutRightBig"
    //         >
    //           <Card centered>
    //             <Image
    //               src="https://i.imgur.com/0QdPndG.jpg"
    //               wrapped
    //               ui={false}
    //             />
    //             <Card.Content>
    //               <Card.Header>EventBuds</Card.Header>
    //               <Card.Meta>
    //                 <span className="date">Django, Python, postgreSQL</span>
    //               </Card.Meta>
    //               <Card.Description>
    //                 App to track what who is going to what event and find
    //                 friends.
    //               </Card.Description>
    //             </Card.Content>
    //             <Card.Content extra>
    //             <a href="https://eventbuds.herokuapp.com/">
    //                 <Button>View</Button>
    //               </a>
    //               <a href="https://github.com/diggy63/eventbuds">
    //                 <Button>GitHub</Button>
    //               </a>
    //             </Card.Content>
    //           </Card>
    //         </AnimationOnScroll>
    //       </Grid.Column>
    //       <Grid.Column  textAlign="center">
    //         <AnimationOnScroll
    //           animateIn="animate__fadeInRightBig"
    //           delay={200}
    //           animateOut="animate__fadeOutRightBig"
    //         >
    //           <Card centered className="white">
    //             <Image
    //               src="https://i.imgur.com/oRkjwld.png"
    //               wrapped
    //               ui={false}
    //             />
    //             <Card.Content>
    //               <Card.Header>Workout Tracker</Card.Header>
    //               <Card.Meta>
    //                 <span className="date">MERN Full-Stack</span>
    //               </Card.Meta>
    //               <Card.Description>
    //                 Workout tracker with API excercise information.
    //               </Card.Description>
    //             </Card.Content>
    //             <Card.Content extra>
    //             <a href="https://workouttrackerdk.herokuapp.com/">
    //                 <Button>View</Button>
    //               </a>
    //               <a href="https://github.com/diggy63/eventbuds">
    //                 <Button>GitHub</Button>
    //               </a>
    //             </Card.Content>
    //           </Card>
    //         </AnimationOnScroll>
    //       </Grid.Column>
    //     </Grid.Row>

    //   </Grid>
    //   </div>
  );
}
