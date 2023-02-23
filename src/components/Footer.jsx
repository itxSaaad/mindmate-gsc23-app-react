import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light m-auto d-flex align-items-center justify-content-cneter">
      <Container>
        <div className="pt-2 text-center">
          <p className="lead">&copy; 2023 MindMate</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
