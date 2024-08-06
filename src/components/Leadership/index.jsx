import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import wicsEvent from "../../assets/wics-event.jpg";
import wicsLogo from "../../assets/wics-logo.png";
import wecodeLogo from "../../assets/wecode-logo.jpg";
import rtcLogo from "../../assets/rtc-logo.jpg";
import "./index.css";

const Leadership = () => {
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

  const activities = [
    {
      title: "WiCS",
      imgUrl: wicsEvent,
    },
    {
      title: "WiCS_Events",
      imgUrl: wicsEvent,
    },
    {
      title: "Tapia Conference",
      imgUrl: wicsEvent,
    },
  ];

  return (
    <section className="leadership" id="leader">
      <Container>
        <Row>
          <Col>
            <h2>Leadership Experience</h2>
            <h3>Activities</h3>
            <div className="activity-container">
              <Row className="margin-top">
                <Col>
                  <Carousel className="carousel-container">
                    <Carousel.Item interval={1400}>
                      <img src={wicsEvent} alt=""></img>
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1400}>
                      <img src={wicsEvent} alt=""></img>
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1400}>
                      <img src={wicsEvent} alt=""></img>
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </div>
            <div className="organization-contaainer">
              <h3>Involvement in Organizations</h3>
              <Row
                className="margin-top"
                style={{ justifyContent: "center", paddingBottom: "50px" }}
              >
                <Col xs={4} md={2} className="activiti-card">
                  <div className="item">
                    <img src={wicsLogo} alt="" />
                    <p>DePauw WiCS</p>
                  </div>
                </Col>
                <Col xs={4} md={2} className="activiti-card">
                  <div className="item">
                    <img src={wicsLogo} alt="" />
                    <p>GHC</p>
                  </div>
                </Col>
                <Col xs={4} md={2} className="activiti-card">
                  <div className="item">
                    <img src={wecodeLogo} alt="" />
                    <p>WeCode Harvard</p>
                  </div>
                </Col>
                <Col xs={4} md={2} className="activiti-card">
                  <div className="item">
                    <img src={wicsLogo} alt="" />
                    <p>Xplore TechPoint</p>
                  </div>
                </Col>
                <Col xs={4} md={2} className="activiti-card">
                  <div className="item">
                    <img src={rtcLogo} alt="" />
                    <p>Rewriting The Code</p>
                  </div>
                </Col>
                <Col xs={4} md={2} className="activiti-card">
                  <div className="item">
                    <img src={wecodeLogo} alt="" />
                    <p>Girl Who Code</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Leadership;
