import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
      <Link to="/index.html" className="navbar-brand p-0">
        <h1 className="m-0 text-primary">
          <i className="fa fa-tooth me-2"></i>DentCare
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link
            to="/kidshospital/src/Components/Service.js"
            className="nav-item nav-link"
          >
            Service
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="/kidshospital/src/Components/Pricing.js"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <Link
                to="/kidshospital/src/Components/Pricing.js"
                className="dropdown-item"
              >
                Pricing Plan
              </Link>
              <Link
                to="/kidshospital/src/Components/Team.js"
                className="dropdown-item"
              >
                Our Dentist
              </Link>
              <Link
                to="/kidshospital/src/Components/Testimonial.js"
                className="dropdown-item"
              >
                Testimonial
              </Link>
              <Link
                to="/kidshospital/src/Components/Appoinment.js"
                className="dropdown-item"
              >
                Appointment
              </Link>
            </div>
          </div>
          <Link
            to="/kidshospital/src/Components/Contact.js"
            className="nav-item nav-link"
          >
            Contact
          </Link>
        </div>
        <button
          type="button"
          className="btn text-dark"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i className="fa fa-search"></i>
        </button>
        <Link
          to="/kidshospital/src/Components/Appoinment.js"
          className="btn btn-primary py-2 px-4 ms-3"
        >
          Appointment
        </Link>
      </div>
    </nav>
  );
}
