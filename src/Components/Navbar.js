import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <h3 className="text-light">{props.title}</h3>
          {/* <a className="navbar-brand " href="/">Institute Sport Event Management</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  {props.signin}
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="/registration"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  {props.signup}
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/contactus"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  {props.contactus}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  {props.aboutus}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-brand mx-auto">
          <h6 className="text-light">
            @2021-22 | Bhumik Patel & Raj Zalavadiya
          </h6>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  signin: PropTypes.string.isRequired,
  signup: PropTypes.string.isRequired,
  contactus: PropTypes.string.isRequired,
  aboutus: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
};
