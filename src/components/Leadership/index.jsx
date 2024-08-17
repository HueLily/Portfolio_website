import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wecodeLogo from "../../assets/wecode-logo.jpg";
import ghcLogo from "../../assets/ghc.jpg";
import xplore from "../../assets/xplore.jpg";
import gwc from "../../assets/gwc.jpeg";
import rtcLogo from "../../assets/rtc-logo.jpg";
import hackathon from "../../assets/hackathon.jpg";
import wecode from "../../assets/wecode.jpg";
import wicsExec from "../../assets/wics-exec.jpg";
import tapia from "../../assets/tapia.jpg";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";

const Leadership = () => {
  const activities = [
    {
      title: "WiCS",
      imgUrl: "",
    },
    {
      title: "WiCS_Events",
      imgUrl: "",
    },
    {
      title: "Tapia Conference",
      imgUrl: "",
    },
  ];
  const carouselStyle = {
    height: "450px",
  };

  return (
    <section className="leadership" id="leadership">
      <Container>
        <h2>Leadership Experience</h2>
        <Row>
          <Carousel indicators={false} data-bs-theme="dark">
            <Carousel.Item interval={2500} style={carouselStyle}>
              <img src={hackathon} className="carousel-img" />
              <Carousel.Caption>
                <h3>WiCS Tiger Hackathon</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500} style={carouselStyle}>
              <img src={wecode} className="carousel-img" />
              <Carousel.Caption>
                <h3>WeCode Harvard 2024</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500} style={carouselStyle}>
              <img src={wicsExec} className="carousel-img" />
              <Carousel.Caption>
                <h3>WiCS Executive Boards</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500} style={carouselStyle}>
              <img src={tapia} className="carousel-img" />
              <Carousel.Caption>
                <h3>Tapia Conference 2023</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <div className="hexa gon">
            <img className="hexa-img" src={wecodeLogo} alt=""></img>
          </div>
          <div className="hexa gon">
            <img className="hexa-img" src={wecodeLogo} alt=""></img>
          </div>
          <div className="hexa gon">
            <img className="hexa-img" src={ghcLogo} alt=""></img>
          </div>
          <div className="hexa gon">
            <img className="hexa-img" src={xplore} alt=""></img>
          </div>
          <div className="hexa gon">
            <img className="hexa-img" src={gwc} alt=""></img>
          </div>
          <div className="hexa gon">
            <img className="hexa-img" src={rtcLogo} alt=""></img>
          </div>
        </Row>
        <Row className="second-row">
          <div className="hexa gon">
            <img className="hexa-img" src={wecodeLogo} alt=""></img>
          </div>
          <div className="hexa gon">
            <img className="hexa-img" src={wecodeLogo} alt=""></img>
          </div>
          <div className="hexa gon">
            <img className="hexa-img" src={wecodeLogo} alt=""></img>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default Leadership;
