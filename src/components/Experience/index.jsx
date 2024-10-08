import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import ExperienceItem from "../../util/ExperienceItem";

const Experience = () => {
  const works = [
    {
      id: 1,
      year: "08/2024 - Present",
      title: "Full-stack Software Engineer",
      location: " - FinBud AI Company",
      desc1:
        "Developed a full-stack financial app using AI power to track stock on real-time, get personalized trade suggestions, and financial guidance by AI Chatbot, implement APIs to provide users with financial news and economic trends",
    },

    {
      id: 2,
      year: "08/2023 - Present",
      title: "Teaching Assistant",
      location: " - DePauw Computer Science Department",
      desc1:
        "Assisted professors in introducing the course using Java, dedicated 4 hours weekly to hosting office hours, and mentored 60 students through fundamental concepts, facilitating 20+ hands-on coding exercises and projects",
    },

    {
      id: 1,
      year: "05/2024 - 08/2024",
      title: "Technical Intern",
      location: " - Tenzer Technology Center",
      desc1:
        "Developed responsive user interfaces that integrated advanced client-side scripting techniques using JavaScript, HTML and CSS, resulting in a 15% increase in validation accuracy and user interactivity",
    },
  ];

  const organization = [
    {
      id: 1,
      year: "12/2023 - Present",
      title: "President",
      location: " - DePauw Women in Computer Science",
      desc1:
        "Direct 17+ executive board members to build WiCS Linkedin and 12 workshops, 2 Hackathon competitions, a Capture the Flag contest and support members engage in 4 conferences, achieving a 170% increase in members",
    },

    {
      id: 2,
      year: "06/2024 - 08/2024",
      title: "Xplore Intern",
      location: " - TechPoint",
      desc1:
        "Direct 17+ executive board members to build WiCS Linkedin and conduct 10 workshops and support members engage in 4 conferences, achieving a 170% increase in members",
    },
    {
      id: 3,
      year: "06/2023 - 11/2023",
      title: "Technical Advisor",
      location: " - DePauw Women in Computer Science",
      desc1:
        "Supports a group of 200+ qualified members and collaborate to conduct two Hackathon competitions, leading a 5-person team cooperate with the social media department to boost event outreach",
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
