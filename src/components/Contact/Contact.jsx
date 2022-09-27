import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Contact.css";
import {
  Container,
  Header,
  Segment,
  Grid,
  Image,
  Button,
  Card,
  Icon,
} from "semantic-ui-react";

export default function Page({ pageID, pageDown, pageUp, secClass, isDark }) {
  return (
    <div id={pageID} className={secClass}>
      <div className="contactMargin">
        <Grid columns={2} centered textAlign="center">
          <Grid.Row textAlign="center">
            <Grid.Column>
              <div className="cardContainer">
              <Card fuild>
                <Card.Content header="A little Histroy" />
                <Card.Content>
                  <Card.Description>
                    <div className="descriptionFont">
                    I went to University of Washington where I first feel in
                    love with programming and took all of the introdutary course
                    for CSE. I was also playing for the University of Washington Football
                    Team so I had no time to attend or focus on programming. I graduated with a major
                    in Political Science and a minor in Math. Shortly after graduation I decided to open 
                    a Polish restaurant, Sebi's Bistro. We ran a successful business until the pandemic hit
                    in 2020 where we were forced to only have take out and delivery. During that time I had
                    quite a bit of off time and I decided to start doing some programming for fun. Turns out
                    I still love it so I went through a GA SEI chort and am looking to make an impact on the 
                    World through programming.
                    </div>
                  </Card.Description>
                </Card.Content>
              </Card>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src="/Images/Me.jpg" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Contact Me</Card.Header>
                  <Card.Meta>
                    <span className="date">Daniel Kanczugowski</span>
                  </Card.Meta>
                  <Card.Description>
                    Phone:(425)772-1034
                    {"\n"}
                    Email: Daniel.Kanczugowski@gmail.com
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button>
                    <a href="https://www.linkedin.com/in/daniel-kanczugowski/">
                      Linkedin
                    </a>
                  </Button>
                  <Button>
                    <a href="https://github.com/diggy63">GitHub</a>
                  </Button>
                  <Header as="h4">Thank you for viewing my protfolio</Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Scrollup pageUp={pageUp} isDark={isDark} />
        <Scrolldown pageDown={pageDown} pageID={pageID} isDark={isDark} />
      </div>
    </div>
  );
}
