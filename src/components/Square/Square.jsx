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
  Modal,
} from "semantic-ui-react";
import { saveAs } from "file-saver";

export default function Square({isDark}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [imgSizer, setImageSizer] = useState(window.innerWidth < 1600);
  const [titleColor, setTitleColor] = useState('')
  const [open, setOpen] = useState(false);
  let color = ''
  let invert = false
  if(isDark){
    color = 'grey'
    invert = true
    console.log('change')
  }
  function dlRes(e) {
    saveAs("/Images/Resume.jpg", "resumeDanielK.jpg");
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 600;
        if (ismobile !== isMobile) setIsMobile(ismobile);
        const imgSize = window.innerWidth < 1600;
        if (imgSize !== imgSizer) setImageSizer(imgSize);
      },
      false
    );
  }, [isMobile]);

  const iconClass = isMobile ? "mini" : "tiny";

  if (isMobile) {
    return (
      <Grid style={{ maxWidth: 1200 }} centered stretched textAlign="justified">
        <Grid.Row centered textAlign="center">
          <Grid.Column width={16} textAlign="center">
            <div className="white">
              <div className="title">About Me</div>
              <p>
                A Junior Developer with a background in MERN full-stack web
                development, management, and collegiate sports. I approach each
                project understanding that big achievements take small, precise
                steps. With strong problem-solving skills and a willingness to
                learn quickly, I bring passion for succeeding and offering
                solutions to colleagues and clients.
              </p>
            </div>
          </Grid.Column>

          <Grid.Column width={16} textAlign="center">
            <div className="white">
              <div className="title">Education</div>
              <p>General Assembly: Software Engineer Immersive</p>
              <p>University of Washington: BA Poli Sci</p>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Resume</Button>}
              >
                <Modal.Content image>
                  <Image centered size="big" src="/Images/Resume.jpg" wrapped />
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={dlRes}>Download</Button>
                  <Button color="black" onClick={() => setOpen(false)}>
                    Done
                  </Button>
                </Modal.Actions>
              </Modal>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched className="marginTop" verticalAlign="bottom">
          <Grid.Column
            className="white marginTop"
            textAlign="center"
            verticalAlign="middle"
            width={16}
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
        </Grid.Row>
      </Grid>
    );
  }
  return (
    // <Segment style={{maxWidth:1200}} padded="very">
    <Grid style={{ maxWidth: 1600 }} centered stretched textAlign="justified">
      <Grid.Row>
        <Grid.Column>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          delay={1000}
          animateOut="animate__fadeIn"
        >
          <Header as="h1" textAlign="center" dividing inverted={invert} color={color}>
            About Me
          </Header>
        </AnimationOnScroll>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row colums={2} centered textAlign="center">
        <Grid.Column width={7} textAlign="center">
          <AnimationOnScroll
            animateIn="animate__rotateInDownLeft"
            animateOut="animate__fadeOutLeftBig"
          >
            <div className="white">
            <Header as="h1" textAlign="center" dividing>
              Who I Am
            </Header>
              <p className="smallScreen">
                A Junior Developer with a background in MERN full-stack web
                development, management, and collegiate sports. I approach each
                project understanding that big achievements take small, precise
                steps. With strong problem-solving skills and a willingness to
                learn quickly, I bring passion for succeeding and offering
                solutions to colleagues and clients.
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
            <Header as="h1" textAlign="center" dividing>
              Education
            </Header>
              <p>
                General Assembly: Software Engineer Immersive
                <br></br>
                University of Washington: BA Poli Sci
              </p>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Resume</Button>}
              >
                <Modal.Content image>
                  <Image
                    centered
                    size="big"
                    src="/Images/resume.PNG"
                    wrapped
                  />
                </Modal.Content>
                <Modal.Actions>
                  <Button onClick={dlRes}>Download</Button>
                  <Button color="black" onClick={() => setOpen(false)}>
                    Done
                  </Button>
                </Modal.Actions>
              </Modal>
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
            <Header as="h1" textAlign="center" dividing>
              Skills
            </Header>
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

    </Grid>
  );
}
