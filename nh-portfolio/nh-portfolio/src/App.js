import React from "react";
import Navbar from './components/Navbar.jsx';
import Home from './portfolio/Home.jsx';
import About from './portfolio/About.jsx';
import Skills from './portfolio/Skills.jsx';
import Projects from './portfolio/Projects.jsx';
import Contact from './portfolio/Contacts.jsx';

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
