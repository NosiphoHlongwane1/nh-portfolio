import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-5"
      style={{ height: "50vh", backgroundColor: "#013220" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-white">TOOLS & TECHNOLOGIES</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 d-flex flex-wrap justify-content-center gap-4 text-white fs-1">
            <div className="icon-card">
              <ion-icon name="logo-react" style={iconStyle}></ion-icon>
            </div>
            <div className="icon-card">
              <ion-icon name="logo-javascript" style={iconStyle}></ion-icon>
            </div>
            <div className="icon-card">
              <ion-icon name="logo-nodejs" style={iconStyle}></ion-icon>
            </div>
            <div className="icon-card">
              <ion-icon name="logo-html5" style={iconStyle}></ion-icon>
            </div>
            <div className="icon-card">
              <ion-icon name="logo-css3" style={iconStyle}></ion-icon>
            </div>
            <div className="icon-card">
              <ion-icon name="logo-sass" style={iconStyle}></ion-icon>
            </div>
            <div className="icon-card">
              <ion-icon name="logo-github" style={iconStyle}></ion-icon>
            </div>
            <div className="icon-card">
              <ion-icon name="logo-figma" style={iconStyle}></ion-icon>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
}

const iconStyle = {
  fontSize: "3rem", // Increased icon size
  transition: "transform 0.3s ease", // Smooth transition for scaling
};

