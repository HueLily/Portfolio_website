import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wicsEvent from "../../assets/wics-event.jpg";
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
          <h2>Leadership Experience</h2>

          <Row>
            <Col>
              <article className="card">
              
              </article>
            </Col>
              <div className="hexa gon"></div>
              <div className="hexa gon"></div>
              <div className="hexa gon"></div>
              <div className="hexa gon"></div>
          </Row>

          
        </Row>
        
      </Container>
    </section>
  );
};
export default Leadership;
