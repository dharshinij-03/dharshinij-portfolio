import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        marginTop: "60px",
        borderTop: "1px solid #eaeaea",
      }}
    >
      {/* Line */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#ddd",
          margin: "0 auto",
          maxWidth: "1100px",
        }}
      />

      {/* Text */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          fontSize: "0.95rem",
          color: "#555",
        }}
      >
        © {new Date().getFullYear()} <strong>Dharshini J</strong> • Built with{"React"}
        <span style={{ fontWeight: "600" }}>React</span>
      </div>
    </footer>
  );
}
