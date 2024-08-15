import React from "react";
import { Container, Row } from "react-bootstrap";
// import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import musicApp from "../../assets/music-app.png";
import marketApp from "../../assets/market-app.png";
import organicApp from "../../assets/organic.jpg";
import dpuHack from "../../assets/DePauw-hack.png";
import safeRoute from "../../assets/safe-route.jpg";
import googleAPI from "../../assets/google-api.jpg";
import ProjectItem from "../../util/ProjectItem";
import "./index.css";
import { Parallax } from "../../util/Parallax";

const Project = () => {
  const projects = [
   

    {
      img: musicApp,
      title: "Music App",
    },

    {
      img: marketApp,
      title: "Renoon Same",
      
    },

    {
     
      img: organicApp,
      title: "FireGuard",
     
    },

    {
    
      img: dpuHack,
      title: "DePauw Hackathon Website",
      
    },

    {
     
      img: googleAPI,
      title: "Google API Workshop",
     
    },

    {
    
      img: safeRoute,
      title: "Safe Route",
      
    },
    
  ];
  return (
    <section className="project" id="project">
      <h2>Projects</h2>
       <Parallax projects={projects} />
      
    </section>
  );
};
export default Project;
