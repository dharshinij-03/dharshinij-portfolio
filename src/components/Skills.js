import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiAdobe } from "react-icons/si";

const skillCategories = {
  "Frontend": [
    { icon: <FaHtml5 color="#E44D26" />, name: "HTML" },
    { icon: <FaCss3Alt color="#264de4" />, name: "CSS" },
    { icon: <FaJsSquare color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DBFB" />, name: "React" },
    { icon: <FaBootstrap color="#563D7C" />, name: "Bootstrap" },
  ],
  "Backend": [
    { icon: <FaNode color="#3C873A" />, name: "Node.js" },
    { icon: <SiExpress color="#000000" />, name: "Express.js" },
  ],
  "Database": [
    { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiMysql color="#00758F" />, name: "SQL" },
  ],
  "Other Tools": [
    { icon: <FaGitAlt color="#F1502F" />, name: "Git" },
    { icon: <FaGithub color="#000000" />, name: "GitHub" },
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <SiAdobe color="#FF0000" />, name: "UI/UX Basics" },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
        </h2>

        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx} style={{ marginBottom: "3rem" }}>
            {/* Category Title */}
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
              }}
            >
              {category}
            </h3>

            {/* Skill Grid */}
            <Row>
              {skills.map((s, i) => (
                <Col
                  key={i}
                  xs={6}
                  md={4}
                  lg={2}
                  className="d-flex flex-column align-items-center mb-4"
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    className="skill-icon-wrapper"
                  >
                    {s.icon}
                  </div>
                  <div
                    style={{
                      marginTop: "0.8rem",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    {s.name}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
}
