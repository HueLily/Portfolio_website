import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import githubIcon from "../../assets/github-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import insta from "../../assets/insta.svg";
import Form from "react-bootstrap/Form";
import "./index.css";

const Contact = () => {
  const formInitiaDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitiaDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <section className="contacts" id="contact">
      <Container>
        <Row className="align-items-center">
        <h2>Get In Touch with Lily</h2>
          <Col md={6}>
            <Form className="form-container">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>First and Last Name</Form.Label>
                <Form.Control placeholder="Enter your first name and last name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Leave me some messages</Form.Label>
                <Form.Control placeholder="Enter messages" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <h4>You are welcome to reach me through my email:</h4>
            <h4 className="black">hue.lily.thunguyen@gmail.com</h4>
            <h4>
              Feel free to connect with me on social media and drop a messesage
              for me.
            </h4>
            <span className="navbar-text">
              <div className="social-media">
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
