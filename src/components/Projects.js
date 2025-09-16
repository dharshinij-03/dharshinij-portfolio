import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 0",
        color: "#000000",
      }}
    >
      <Container>
        <h2
          className="text-center"
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "3rem",
          }}
        >
          Featured Projects
        </h2>

        {projects.map((p, idx) => (
          <Row
            key={idx}
            className="align-items-center mb-5"
            style={{
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse", // alternate layout
            }}
          >
            {/* Project Image */}
            <Col md={6} className="mb-4 mb-md-0">
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </Col>

            {/* Project Info */}
            <Col md={6}>
              <div
                style={{
                  background: "#f8f9fa",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#555",
                    marginBottom: "0.5rem",
                  }}
                >
                  Featured Project
                </p>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ color: "#333", lineHeight: "1.6" }}>{p.summary}</p>
                <div className="d-flex gap-3 mt-3">
                  <Button
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-dark"
                    style={{
                      borderRadius: "30px",
                      padding: "0.5rem 1.5rem",
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    href={p.demo}
                    target="_blank"
                     rel="noopener noreferrer"
                    style={{
                      background: "#000",
                      color: "#fff",
                      borderRadius: "30px",
                      padding: "0.5rem 1.5rem",
                      border: "none",
                    }}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}
