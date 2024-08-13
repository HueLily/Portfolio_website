import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wicsEvent from "../../assets/wics-event.jpg";
import wecodeLogo from "../../assets/wecode-logo.jpg";
import rtcLogo from "../../assets/rtc-logo.jpg";
import Carousel from "react-multi-carousel";
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

  return (
    <section className="leadership" id="leader">
      <Container>
        <Row>
          <h2>Leadership Experience</h2>

          <Row className="carousel-row">
            <Carousel
            className="carousel-container"
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="container"
              infinite
              keyBoardControl
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                },
              }}
              showDots={false}
              swipeable
            >
              <img
                src={wicsEvent}
              className="carousel-img"
              />
              <img
                 src={wicsEvent}
                className="carousel-img"
              />
              <img
                 src={wicsEvent}
                className="carousel-img"
              />
            </Carousel>
          </Row>

          <div className="hexa gon"></div>
          <div className="hexa gon"></div>
          <div className="hexa gon"></div>
          <div className="hexa gon"></div>
        </Row>
      </Container>
    </section>
  );
};
export default Leadership;
