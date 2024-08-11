import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import projects from "../../components/Project/index";
import React, { useRef } from "react";
export const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Projects</h1>
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
      className="product-card"
    >
      <img src={project.img} className="product-image" alt={project.title} />

      <div className="overlay"></div>
      <h4 className="product-title">{project.title}</h4>
    </motion.div>
  );
};
export const Parallax = ({ projects }) => {
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 6);
  console.log(firstRow)
  console.log(secondRow)
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0], [0, 0]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, -5], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
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
    useTransform(scrollYProgress, [0, 0.2], [200, 500]),
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
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
