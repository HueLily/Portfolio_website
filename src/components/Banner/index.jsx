import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import bannerImg from '../../assets/banner-img.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./index.css";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  //indicate like index as word currently displayed
  const [isDeleting, setIsDeleting] = useState(false);
  //words being typed out or breing deleted
  const toRotate = ["Computer Science Major", "Software Developer", "student"];
  const [text, setText] = useState("");
  //which part is showing words are displaying
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100); //how fast one letter come after the first
  const period = 2000; //transition between each word
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <p>Welcome to my Portfolio</p>
                  <h1>
                    {`I'm a `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <span className="navbar-text">
                    <div className="social-icon">
                      <Breadcrumb>
                      <Breadcrumb.Item href="https://www.linkedin.com/in/hue-thu-nguyen-513a26256/">
                      <FaLinkedin className="media-icon"/>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item href="https://github.com/HueLily">
                      <FaGithub className="media-icon"/>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item href="">
                      <FaEnvelope className="media-icon"/>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item href="https://www.instagram.com/invites/contact/?i=ow9dygqxymbk&utm_content=e45c1g3">
                      <FaInstagram className="media-icon"/>
                      </Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                  </span>
                  <button>Download My Resume</button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={bannerImg} alt="Headder Img"></img>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
