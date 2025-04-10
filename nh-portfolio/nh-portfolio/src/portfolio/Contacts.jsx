import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section py-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "#013220",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3 text-white">CONTACT</h2>
          </div>
        </div>

        {/* Icons + Form block centered */}
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {/* Vertical Icons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              marginRight: "25px",
            }}
          >
            <a
              href="mailto:nh.hlongwane01@gmail.com"
              className="text-white"
              style={{ fontSize: "2rem" }}
            >
              <i className="fas fa-envelope"></i>
            </a>

            <a
              href="https://github.com/NosiphoHlongwane1"
              target="_blank"
              rel="noreferrer"
              className="text-white"
              style={{ fontSize: "2rem" }}
            >
              <i className="fab fa-github"></i>
            </a>
            
          </div>

          {/* Form */}
          <form
      action="https://formspree.io/f/xzzpokol"
      method="POST"
      style={{
        fontSize: "0.95rem",
        maxWidth: "400px",
        width: "100%",
        backgroundColor: "#f9f9f9",
        padding: "1.5rem",
        borderRadius: "0.75rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "left",
      }}
    >
      <div className="mb-3">
        <label
          htmlFor="name"
          className="form-label"
          style={{ color: "#333", fontWeight: "600" }}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          required
        />
      </div>
    
      <div className="mb-3">
        <label
          htmlFor="email"
          className="form-label"
          style={{ color: "#333", fontWeight: "600" }}
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          required
        />
      </div>
    
      <div className="mb-3">
        <label
          htmlFor="message"
          className="form-label"
          style={{ color: "#333", fontWeight: "600" }}
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="3"
          required
        ></textarea>
      </div>
    
      <button type="submit" className="btn btn-success btn-sm w-100">
        Send
      </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
