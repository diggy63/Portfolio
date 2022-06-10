import React from "react";
import Scrolldown from "../Scrolldown/Scrolldown";
import Scrollup from "../Scrollup/ScrollUp";
import "./Contact.css";
import { Container, Header, Segment, Grid, Image, Button } from "semantic-ui-react";

export default function Page({ pageID, pageDown, pageUp, secClass, isDark }) {
  return (
    <div id={pageID} className={secClass}>
      <div className="contactMargin">
      <Grid centered textAlign="center">
        <Segment textAlign="center">
        
        <Grid.Row className="flexcenter" textAlign="center">
        <Image className="contactImage" centered src='/Images/Me.jpg' size="medium" />
          <Grid.Column>
                <Header as="h2">Contact Me</Header>
                
                <p>(425)772-1034</p>
                <p>Daniel.kanczugowski@gmail.com</p>
                <Button><a href="https://www.linkedin.com/in/daniel-kanczugowski/">Linkedin</a></Button>
                <Button><a href="https://github.com/diggy63">GitHub</a></Button>
                <Header as="h4">Thank you for viewing my protfolio</Header>
          </Grid.Column>
        </Grid.Row>
        </Segment>
      </Grid>
      <Scrollup pageUp={pageUp} isDark={isDark} />
      <Scrolldown pageDown={pageDown} pageID={pageID} isDark={isDark} />
      </div>
    </div>
  );
}
