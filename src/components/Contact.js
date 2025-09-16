import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",   // Replace with your EmailJS service ID
        "your_template_id",  // Replace with your EmailJS template ID
        form.current,
        "your_public_key"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
        },
        (error) => {
          alert("Oops! Something went wrong ❌");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 0",
        color: "#000000",
      }}
    >
      <Container className="text-center">
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Contact
        </h2>
        <p
          className="text-muted"
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem",
          }}
        >
          I'm currently looking to join a cross-functional team.  
          Drop me a message and I’ll get back to you!
        </p>

        {/* Contact Form */}
        <Form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "500px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control type="text" name="user_name" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" name="user_email" placeholder="Your Email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required />
          </Form.Group>
          <Button
            type="submit"
            variant="dark"
            className="px-4 py-2 fw-semibold shadow-sm"
            style={{ borderRadius: "30px", fontSize: "1.1rem" }}
          >
            Send Message
          </Button>
        </Form>

        {/* Social Links */}
        <div className="d-flex justify-content-center gap-4 mt-5">
          <a href="https://github.com/dharshinij-03" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "#000" }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dharshini-j-a32b0a2ba" target="_blank" rel="noopener noreferrer" style={{ fontSize: "2rem", color: "#000" }}>
            <FaLinkedin />
          </a>
        </div>
      </Container>
    </section>
  );
}
