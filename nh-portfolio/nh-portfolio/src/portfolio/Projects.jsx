import React from "react";

// Import images at the top of the file
import avidBookReaderImage from "../assets/images/avidbookreader.png";
import dermastudioImage from "../assets/images/dermastudio.png";
import routinelyImage from "../assets/images/routinely.png";
import landingPageImage from "../assets/images/landingpage.png";
import learninglabImage from "../assets/images/learninglab.png";
import shbootcampImage from "../assets/images/shecodesportfolio.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{ 
        backgroundColor: "#84a98c", minHeight: "100vh" }}
    >
      <div className="container">
      <div className="row justify-content-center text-center mb-4">
      <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-white">PROJECTS</h2>
          </div>
          </div>
        <div className="row g-4">
          {/* Reusable card layout */}
          {[{
            title: "SheCodes Bootcamp Portfolio",
            tech: "HTML & CSS",
            image: shbootcampImage,
            live: "https://shecodes-nosipho-hlongwane-portfolio.netlify.app/",
            repo: "https://github.com/NosiphoHlongwane1/Shecodes-portfolio"
          }, {
            title: "Avid Book-reader: Book-Club",
            tech: "React & Bootstrap",
            image: avidBookReaderImage,
            live: "https://avidbookreader.netlify.app/",
            repo: "https://github.com/NosiphoHlongwane1/Avid-Bookreader"
          }, {
            title: "Learning Lab",
            tech: "React & AI",
            image: learninglabImage,
            live: "https://phonicslearninglab.netlify.app/",
            repo: "https://github.com/NosiphoHlongwane1/learning-lab"
          }, {
            title: "Derma Studios",
            tech: "HTML, CSS & JavaScript",
            image: dermastudioImage,
            live: "https://derma-studios.netlify.app/",
            repo: "https://github.com/NosiphoHlongwane1/DermaStudios"
          }, {
            title: "Routinely",
            tech: "HTML, CSS & JavaScript",
            image: routinelyImage,
            live: "https://routinely-notes.netlify.app/",
            repo: "https://github.com/NosiphoHlongwane1/routinely"
          }, {
            title: "Landing Page: Music",
            tech: "HTML & CSS",
            image: landingPageImage,
            live: "https://artist-landingpage.netlify.app/",
            repo: "https://github.com/NosiphoHlongwane1/Music-Sabrina-Claudio"
          }].map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 text-dark">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.tech}</p>
                  <a
                    href={project.repo}
                    className="btn btn-sm btn-outline-success"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
