import React, { useState, useEffect } from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <></>
  );
};
export default NavigationBar;
