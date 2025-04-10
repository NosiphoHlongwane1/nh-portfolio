import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="text-white py-5"
      style={{ backgroundColor: "#84a98c", minHeight: "90vh" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-white">ABOUT ME</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
              With a background in <strong>International Relations</strong> and a proud graduate of the <strong>SheCodes Bootcamp</strong> — where I completed <strong>9 comprehensive courses</strong> — I've built a strong foundation in frontend development.
              <br /><br />
              I'm passionate about creating appealing and user-friendly web experiences. I love combining the worlds of <strong>logic and creative design</strong> to craft beautiful, accessible, and intuitive web applications.
              <br /><br />
              I'm motivated to join a role where I can challenge myself, grow professionally, and contribute meaningfully to a team's success. I'm excited to bring my skills and energy to a dynamic team and build products that deliver real value to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
