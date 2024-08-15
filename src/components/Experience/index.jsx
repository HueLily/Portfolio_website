import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import ExperienceItem from "../../util/ExperienceItem";

const Experience = () => {
  const works = [
    {
      id: 1,
      icon: <FaBriefcase />,
      year: "05/2024 - 8/2024",
      title: "Tenzer Technology Center Intern",
      location: "",
      desc1:
        "Assists professors in CSC 121 in introducing the course using Java and conducts weekly-4 hours sessions to supports 60 students, which achieve a 40% improvement in their total grade",
      desc2:
        "",
      desc3:
        "                                                                                                                                                                                                                                        ",
    },

    {
      id: 2,
      icon: <FaBriefcase />,
      year: "08/2023 - PRESENT",
      title: "Computer Science Teaching Assistant",
      location: "",
      desc1:
        "Assists professors in CSC 121 in introducing the course using Java and conducts weekly-4 hours sessions to supports 60 students, which achieve a 40% improvement in their total grade",
      desc2:
        "",
      desc3:
        "                                                                                                                                                                                                                                        ",
    },

    {
      id: 3,
      icon: <FaBriefcase />,
      year: "05/2023 - 08/2023",
      title: "Front-End Developer Intern",
      location: " - FPT Software",
      desc1: "",
      desc2:
        "Created 17 functionalities in the user interface by using JavaScript, HTML/CSS, and implemented React to optimize components for maximum reusability, resulting in a 20% decrease in load time post-optimization efforts",
      desc3:
        "",
    },
  ];

  const organization = [
    {
      id: 1,
      icon: <FaBriefcase />,
      year: "12/2023 - PRESENT",
      title: "President",
      location: " - DePauw Women in Computer Science",
      desc1:
        "Direct 17+ executive board members to build WiCS Linkedin and conduct 10 workshops and support members engage in 4 conferences, achieving a 170% increase in members",
      desc2:
        "",
      desc3: "",
    },

    {
      id: 2,
      icon: <FaBriefcase />,
      year: "05/2024 - 7/2024",
      title: "Xplore",
      location: " - TechPoint",
      desc1:
        "Assists professors in CSC 121 in introducing the course using Java and conducts weekly-4 hours sessions to supports 60 students, which achieve a 40% improvement in their total grade",
      desc2:
        "",
      desc3:
        "                                                                                                                                                                                                                                        ",
    },
    
    {
      id: 2,
      icon: <FaBriefcase />,
      year: "06/2023 - 11/2023",
      title: "Technical Advisor",
      location: " - DePauw Women in Computer Science",
      desc1:
        "Supports a group of 200+ qualified members and collaborate to conduct two Hackathon competitions, leading a 5-person team cooperate with the social media department to boost event outreach",
      desc2: "",
      desc3:
        "",
    },
  ];

  return (
    <section className="work" id="experience">
      <Container>
        <Row>
          <h2>Experience </h2>
          <Col>
            <div className="work-container grid">
              <div className="work-data ">
                {works.map((val) => {
                  return <ExperienceItem key={val.id} {...val} />;
                })}
              </div>
            </div>
          </Col>
          <Col>
            <div className="work-container grid">
              <div className="work-data ">
                {organization.map((val) => {
                  return <ExperienceItem key={val.id} {...val} />;
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Experience;
