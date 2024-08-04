import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import musicApp from "../../assets/music-app.png";
import marketApp from "../../assets/market-app.png";
import organicApp from "../../assets/organic.jpg";
import dpuHack from "../../assets/DePauw-hack.png";
import safeRoute from "../../assets/safe-route.jpg";
import googleAPI from "../../assets/google-api.jpg";
import ProjectItem from "../../util/ProjectItem";
import "./index.css";

const Project = () => {
  const projects = [
    {
      id: 1,
      img: musicApp,
      title: "Music App",
      details: [
        {
          icon: <FaCode />,
          title: "Language: ",
          desc: "React, MongoDB, Java, Spring Boot, PostgreSQL, Spotify API, OpenAI API, Authentication",
        },
        {
          icon: <FaExternalLinkAlt />,
          title: "Preview: ",
          desc: "",
        },
      ],
    },

    {
      id: 2,
      img: marketApp,
      title: "Renoon Same",
      details: [
        {
          icon: <FaCode />,
          title: "Language: ",
          desc: "React, Tailwind CSS, MongoDB, Node.js, Express.js, Authetication",
        },
        {
          icon: <FaExternalLinkAlt />,
          title: "Preview: ",
          desc: "",
        },
      ],
    },

    {
      id: 3,
      img: organicApp,
      title: "ORGANIC LIFE",
      details: [
        {
          icon: <FaCode />,
          title: "Language: ",
          desc: "HTML, CSS, JS, React, MongoDB, Express",
        },
        {
          icon: <FaExternalLinkAlt />,
          title: "Preview: ",
          desc: "",
        },
      ],
    },

    {
      id: 4,
      img: dpuHack,
      title: "DePauw Hackathon Website",
      details: [
        {
          icon: <FaCode />,
          title: "Language: ",
          desc: "HTML, CSS, JS, React, Google Map",
        },
        {
          icon: <FaExternalLinkAlt />,
          title: "Preview: ",
          desc: "",
        },
      ],
    },

    {
      id: 5,
      img: googleAPI,
      title: "Google API Workshop",
      details: [
        {
          icon: <FaCode />,
          title: "Language: ",
          desc: "HTML, CSS, JS, React, Google API",
        },
        {
          icon: <FaExternalLinkAlt />,
          title: "Preview: ",
          desc: "",
        },
      ],
    },

    {
      id: 6,
      img: safeRoute,
      title: "Wortal _ Hackathon",
      details: [
        {
          icon: <FaCode />,
          title: "Language: ",
          desc: "",
        },
        {
          icon: <FaExternalLinkAlt />,
          title: "Preview: ",
          desc: "",
        },
      ],
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <h2>Projects</h2>
        <Row>
          <div className="project-container">
            {projects.map((item) => {
              return <ProjectItem key={item.id} {...item} />;
            })}
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default Project;
