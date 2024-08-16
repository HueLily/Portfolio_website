import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { useState, useEffect } from "react";
import githubIcon from "../../assets/github-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import insta from "../../assets/insta.svg";
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
  const toRotate = ["Computer Science Major", "Fullstack Developer", "student"];
  const [text, setText] = useState("");
  //which part is showing words are displaying
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 20); //how fast one letter come after the first
  const period = 100; //transition between each word
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
      setDelta((prevDelta) => prevDelta);
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
          <Col xs={12} md={8} xl={7} >
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
                  <span className="banner-icon">
              <div className="social-media-icon">
                <a href="https://www.linkedin.com/in/hue-thu-nguyen-513a26256/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://github.com/HueLily">
                  <img src={githubIcon} alt="" />
                </a>
                <a href="https://www.instagram.com/invites/contact/?i=ow9dygqxymbk&utm_content=e45c1g3">
                  <img src={insta} alt="" />
                </a>
              </div>
            </span>
                  <button>Download My Resume</button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={5} className="a">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <div className="banner-img-container">
                  <img className="banner-img" src={bannerImg} alt="Headder Img"></img>
                  </div>
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
