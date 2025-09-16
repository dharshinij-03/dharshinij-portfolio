import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function TopNav() {
  return (
    <Navbar
      expand="lg"
      className="topnav fixed-top shadow-sm"
      style={{
        backgroundColor: "#ffffff", // White background
      }}
    >
      <Container>
        {/* Brand with circle DJ logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          {/* Circle with DJ */}
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#000000",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            DJ
          </div>
          {/* Text next to logo */}
          <span
            style={{
              color: "#000000",
              fontSize: "1.5rem",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Welcome 
          </span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="nav" />

        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            {["Home", "About", "Skills", "Projects", "Contact"].map((t) => (
              <Nav.Link
                key={t}
                href={`#${t.toLowerCase()}`}
                style={{
                  color: "#000000",
                  fontWeight: "500",
                  marginLeft: "1.2rem",
                  transition: "color 0.3s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#555";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000";
                  e.target.style.transform = "scale(1)";
                }}
              >
                {t}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
