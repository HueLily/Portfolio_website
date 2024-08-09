import React, { useState } from "react";
import { Col } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import "./index.css";

const ProjectItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      className="project-item"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height:'100%',
      }}
    >
      <div className="img-container">
        <img src={img} alt="" className="project-img" />
      </div>
      <div className="project-hover" onClick={toggleModal}>
        <h3 className="project-title">
          <b>{title}</b>
        </h3>
      </div>

      {/* {modal && (
          <div className="project-modal">
            <div className="modal-content" id="modal">
              <CloseButton className="modal-close" onClick={toggleModal} />
              <h3 className="modal-title">{title}</h3>

              <ul className="modal-list grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal-item" key={index}>
                      <span className="item-icon">{icon}</span>
                      <div>
                        <span className="item-title">{title}</span>
                        <span className="item-desc">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <img src={img} alt="" className="modal-img" />
            </div>
          </div>
        )} */}
    </div>
  );
};

export default ProjectItem;
