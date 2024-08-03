import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import circleImg from "../../assets/me-img.jpg";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaBootstrap, FaNodeJs, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb, BiLogoSpringBoot, BiLogoTypescript, BiLogoTailwindCss, BiLogoNetlify } from "react-icons/bi";
import "./index.css"

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
          <Col xs={12} md={6} xl={8} id="intro">
            <p>
              I am a Computer Science major and Economics major at DePauw
              University. My experience includes Web Development and Android
              Development. I am interested in security and excited to keep
              learning and expanding my skills.
            </p>
          </Col>
        </Row>

        <div className="qualification-list">
          <h5>Qualification</h5>
          <Row
            className="margin-top"
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaJava />
                <p>Java</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
               
                <p>C/C++</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaHtml5 />
                <p>HTML5</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaCss3Alt />
                <p>CSS3</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaJs />
                <p>Javascript</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <BiLogoPostgresql />
                <p>SQL</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <BiLogoMongodb />
                <p>MongoDB</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaReact />
                <p>React JS</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaAngular />
                <p>Angular</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaBootstrap />
                <p>Bootstrap</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <FaNodeJs />
                <p>Node JS</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <p>API</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
export default Qualification;
