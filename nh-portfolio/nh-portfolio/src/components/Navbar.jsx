import React from "react";
import logo from '../assets/images/nlogo.png'; // Add your logo in src/assets

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#84a98c" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#home">
          <img src={logo} alt="logo" width="40" className="me-2" />
          Nosipho Hlongwane
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-white" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
