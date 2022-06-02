import React from "react";
import {
  Grid,
  Card,
  Image,
  Icon,
  Button,
  Segment,
  Header,
} from "semantic-ui-react";
import Typewriter from "typewriter-effect";

export default function LandingContent() {
    
  return (
      <div className="fontSize50">
    <Typewriter
    options={{
        strings: ['Software Developer', 'Front-End Developer','Passionate Developer'],
        autoStart: true,
        loop: true,
        pauseFor:2000,
      }}
    />
    </div>
  );
}
