import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 0",
        color: "#000000",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              About Me
            </h2>
            <p
              className="text-muted"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              I am a passionate <strong>MERN Stack Developer</strong> with a strong
              foundation in building scalable and user-friendly web applications.
              I enjoy turning complex problems into simple, elegant solutions with
              clean and efficient code.
            </p>
            <p
              className="text-muted"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              My expertise lies in <strong>React</strong> for crafting intuitive
              front-ends, <strong>Node.js & Express</strong> for building robust
              back-ends, and <strong>MongoDB</strong> for managing data efficiently.
              I am also enthusiastic about learning new technologies, contributing
              to collaborative projects, and delivering seamless user experiences.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
