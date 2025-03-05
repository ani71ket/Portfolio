import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tours from "../../Assets/Projects/tours.jpeg";
import movie from "../../Assets/Projects/movie.jpg";
import bakery from "../../Assets/Projects/bakery.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tours}
              isBlog={false}
              title="Anupama Tours & Travels"
              description="Basic performance tourism web app built for seamless exploration, intuitive navigation, and future-ready expansion with online booking and transactions. Designed for speed, engagement, and scalability."
              ghLink="https://github.com/ani71ket/Anupama-Tours-Travels"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movify"
              description="Fast and scalable movie streaming platform with an intuitive UI, reusable components, and seamless watch-and-download functionality for an optimized user experience."
              ghLink="https://github.com/ani71ket/Movify"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bakery}
              isBlog={false}
              title="Bakery Shop Catalogue"
              description="A sleek and interactive bakery catalogue web page designed for smooth product browsing with dynamic filtering and an intuitive user experience. Built for scalability, performance, and future e-commerce integration."
              ghLink="https://github.com/ani71ket/Bakery-Shop-Catalogue"
                         
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
