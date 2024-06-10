import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Profile from "../../Assets/profile.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container  className="home-content">
          <Row>
            <Col md={8} className="home-header">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                👋👋🏻👋
                </span>
              </h1>

              <h1 className="heading-name">
                I am 
                <strong className="main-name"> OARABILE KGATLHANE</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>             
            </Col>            
          <Col md={4} style={{ paddingBottom: 20}}>
              <img
                src={Profile}
                alt="home profile"
                className="img-fluid"
                style={{ maxHeight: "450px"}}
              />
          </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home;
