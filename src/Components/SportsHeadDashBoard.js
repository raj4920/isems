import React from "react";
import { Link } from "react-router-dom";

function SportsHeadDashBoard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <h3 className="text-light">Sports Head Dashboard</h3>
          {/* <Link className="navbar-brand " to="/">Institute Sport Event Management</Link> */}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Add Game Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Set Sport Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Allocate Sports Coordinators
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Generate Result
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Generate Report
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to=""
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SportsHeadDashBoard;
