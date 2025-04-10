import React from "react";
import Resume from "../assets/documents/NHRESUME.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="text-white text-center d-flex align-items-center justify-content-center"
      style={{ height: "80vh", backgroundColor: "#013220" }}
    >
      <div>
        <h1 className="fw-bold display-4 text-white">Nosipho Hlongwane</h1>
        <h3 className="mb-4 text-white">Front-End Developer</h3>
        <h6 className="mb-4 text-white">Based in Johannesburg, South Africa</h6>
        <a
          href={Resume}
          download="NosiphoHlongwane_Resume"
          className="btn btn-light"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
