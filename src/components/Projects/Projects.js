import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Github from "./Github";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={chatify}
              isBlog={false}
              title="YelpCamp"
              description="This project was built during the web development bootcamp to delve deep into the fundamentals of creating CRUD projects using MongoDB, Express.js, Node.js, and other JavaScript libraries. It served as valuable practice for backend development."
              ghLink="https://github.com/4orops/YelpCamp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="YelpCamp"
              description="This project was built during the web development bootcamp to delve deep into the fundamentals of creating CRUD projects using MongoDB, Express.js, Node.js, and other JavaScript libraries. It served as valuable practice for backend development."
              ghLink="https://github.com/4orops/YelpCamp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="YelpCamp"
              description="This project was built during the web development bootcamp to delve deep into the fundamentals of creating CRUD projects using MongoDB, Express.js, Node.js, and other JavaScript libraries. It served as valuable practice for backend development."
              ghLink="https://github.com/4orops/YelpCamp"
            />
          </Col>
        </Row>
        <Github />
    
      </Container>
    </Container>
  );
}

export default Projects;
