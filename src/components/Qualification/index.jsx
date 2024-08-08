import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import circleImg from "../../assets/me-img.jpg";
import Marquee from "react-fast-marquee";
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
              I am a Computer Science major and Economics major at DePauw
              University. My experience includes Web Development and Android
              Development. I am interested in security and excited to keep
              learning and expanding my skills.
            </p>
          </Col>
        </Row>

        <div className="qualification-list">
          <h5>Qualification</h5>

          <Marquee>
            <Row
              className="margin-top"
              style={{ justifyContent: "center", paddingBottom: "50px" }}
            >
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Java</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Python</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>C/C++</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>HTML5</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>CSS3</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Javascript</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Node JS</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>React JS</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Angular</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Bootstrap</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>PostgreSQL</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>MongoDB</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Node JS</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Spring Boot</p>
                </div>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Git</p>
                </div>
              </Col>
              
              <Col xs={4} md={2} className="tech-icons">
                <div className="item">
                  <p>Node JS</p>
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
