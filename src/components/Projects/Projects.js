import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Github from "./Github";
import YelpCamp from "../../Assets/Projects/YelpCamp.png";
import Qasha from "../../Assets/Projects/Qasha.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Qasha}
              isBlog={false}
              title="QASHA"
              description="This is an ongoing project, its a frontend build using REACTJS for a room rental in South Africa."
              ghLink="https://github.com/4orops/qasha"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YelpCamp}
              isBlog={false}
              title="YelpCamp"
              description="This project was built during the web development bootcamp to delve deep into the fundamentals of creating CRUD projects using MongoDB, Express.js, Node.js, and other JavaScript libraries. It served as valuable practice for backend development."
              ghLink="https://github.com/4orops/YelpCamp"
              demoLink="https://yelpcamp-h5tq.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YelpCamp}
              isBlog={false}
              title="YelpCamp"
              description="This project was built during the web development bootcamp to delve deep into the fundamentals of creating CRUD projects using MongoDB, Express.js, Node.js, and other JavaScript libraries. It served as valuable practice for backend development."
              ghLink="https://github.com/4orops/YelpCamp"
              demoLink="https://yelpcamp-h5tq.onrender.com/"
            />
          </Col>
        </Row>
        <Github />
    
      </Container>
    </Container>
  );
}

export default Projects;
