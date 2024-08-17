import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import projects from "../../components/Project/index";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import "./index.css";

export const Header = () => {
  return (
    <div className="header">
      <h2 className="header-title">Projects</h2>
    </div>
  );
};

export const ProjectCard = ({ project, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
        width: "500px",
        flex: "1 1 calc(50% - 20px)",
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="project-card"
    >
      <div className="project-item">
        <img src={project.img} className="project-image" />
        <div className="project-hover">
          <div className="project-afterhover">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-desc">{project.desc}</span>
            <div className="button-container">
              <Button variant="info" href={project.live} className="btn">
                Live
              </Button>
              <Button variant="dark" href={project.github} className="btn">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Parallax = ({ projects }) => {
  const firstRow = projects.slice(0, 2);
  const secondRow = projects.slice(2, 4);
  const thirdRow = projects.slice(4, 6);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 0]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [25, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-500, 500]),
    springConfig
  );

  return (
    <div id="parallax" ref={ref} className="parallax">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          width: "100%",
        }}
        className=""
      >
        <motion.div
          className="project-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div
          className="project-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>

        <motion.div
          className="project-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {thirdRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
