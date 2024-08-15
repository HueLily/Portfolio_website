import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wicsEvent from "../../assets/wics-event.jpg";
import wecodeLogo from "../../assets/wecode-logo.jpg";
import rtcLogo from "../../assets/rtc-logo.jpg";
// import Carousel from "react-multi-carousel";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";

const Leadership = () => {
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
  const carouselStyle = {
      height:'500px',
  }

  return (
    <section className="leadership" id="leadership">
      <Container>
        <h2>Leadership Experience</h2>
        <Row>
          <Carousel indicators={false} data-bs-theme="dark">
            <Carousel.Item interval={2500} style={carouselStyle}>
              <img src={wicsEvent} className="carousel-img" />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2500} style={carouselStyle}>
              <img src={wicsEvent} className="carousel-img" />
              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={2500} style={carouselStyle}>
              <img src={wicsEvent} className="carousel-img" />
              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <div className="hexa gon">
            <img className ="hexa-img" src={wecodeLogo} alt=""></img>
          </div>
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
        </Row>
        <Row className="second-row">
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
          <div className="hexa gon"><img className ="hexa-img" src={wecodeLogo} alt=""></img></div>
        </Row>
      </Container>
    </section>
  );
};
export default Leadership;
