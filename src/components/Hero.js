import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import resume from "../assets/Dharshini_J_RESUME.pdf";
import avatar from "../assets/avatar1.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="text-md-start text-center">
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              Dharshini J
            </h1>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#333333",
                marginBottom: "1.5rem",
              }}
            >
              MERN Stack Developer
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.7",
                color: "#555555",
                marginBottom: "2rem",
              }}
            >
              Aspiring Full-Stack Developer with hands-on experience in the MERN
              stack. Skilled in building responsive web applications, REST APIs,
              and user-friendly interfaces. Passionate about solving problems
              with modern web technologies and delivering scalable solutions.
            </p>

            <Button
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
              className="px-4 py-2 fw-semibold shadow-sm"
              style={{
                borderRadius: "30px",
                fontSize: "1.1rem",
              }}
            >
              View Resume
            </Button>

            {/* ✅ Social Links inside left column */}
            <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-4">
              <a
                href="https://github.com/dharshinij-03"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000", fontSize: "1.8rem" }}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/dharshini-j-a32b0a2ba"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000", fontSize: "1.8rem" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:jdharshu03@email.com"
                style={{ color: "#000", fontSize: "1.8rem" }}
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>

          {/* Right Side with Avatar */}
          <Col
            md={6}
            className="d-none d-md-flex justify-content-center align-items-center"
            style={{
              minHeight: "400px",
            }}
          >
            <img
              src={avatar}
              alt="Avatar"
              style={{
                width: "80%",
                height: "auto",
                borderRadius: "12px",
                objectFit: "contain",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
