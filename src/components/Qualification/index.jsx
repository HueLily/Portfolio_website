import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import circleImg from "../../assets/me-img.jpg";
import Marquee from "react-fast-marquee";
import java from "../../assets/java.svg";
import python from "../../assets/python.svg";
import cplusplus from "../../assets/c++.svg";
import html from "../../assets/html5.svg";
import css from "../../assets/css3.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg";
import tailwind from "../../assets/tailwind.svg";
import node from "../../assets/node.svg";
import spring from "../../assets/spring.svg";
import mongo from "../../assets/mongo.svg";
import postgre from "../../assets/postgre.svg";
import github from "../../assets/github.svg";
import git from "../../assets/git.svg";
import netlify from "../../assets/netlify.svg";
import tableau from "../../assets/tableau.svg";
import "./index.css";

const Qualification = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="qualification" id="qualification">
      <Container>
        <Row className="align-items-center first-row" id="row1">
          <h2>About Me</h2>

          <Col xs={12} md={6} xl={4}>
            <img src={circleImg} alt="Headder Img" className="me-img"></img>
          </Col>
          <Col xs={12} md={6} xl={8} className="introduction-container">
            <p className="normal-para">
              I am a rising junior undergraduate pursuing Bachelors in Computer
              Science from DePauw University. My experience includes Web
              Development and Android Development. I am enthusiastic to a rising junior undergraduate pursuing Bachelors
              in Computer Science from DePauw Universitylearn
              full-stack web developing, security and cloud computing, and I am
              excited to learn new things.
            </p>
          </Col>
        </Row>

        <div className="qualification-list">
          <h5>Qualification</h5>

          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            <Row
              className="margin-top"
              style={{ justifyContent: "center", paddingBottom: "50px" }}
            >
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={java} alt=""></img>
                  <p>Java</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={python} alt=""></img>
                  <p>Python</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={cplusplus} alt=""></img>
                  <p>C/C++</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={html} alt=""></img>
                  <p>HTML5</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={css} alt=""></img>
                  <p>CSS3</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={javascript} alt=""></img>
                  <p>Javascript</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={typescript} alt=""></img>
                  <p>TypeScript</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={react} alt=""></img>
                  <p>React JS</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={bootstrap} alt=""></img>
                  <p>Bootstrap</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={tailwind} alt=""></img>
                  <p>Tailwind</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={node} alt=""></img>
                  <p>Node JS</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={spring} alt=""></img>
                  <p>Spring Boot</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={mongo} alt=""></img>
                  <p>MongoDB</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={postgre} alt=""></img>
                  <p>PostgreSQL</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={github} alt=""></img>
                  <p>GitHub</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={git} alt=""></img>
                  <p>Git</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={netlify} alt=""></img>
                  <p>Netlify</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <img src={tableau} alt=""></img>
                  <p>Tableau</p>
                </div>
              </Col>
            </Row>
          </Marquee>
        </div>
      </Container>
    </section>
  );
};
export default Qualification;
