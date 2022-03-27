import React from "react";

function SportsHeadDashBoard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <h3 className="text-light">Sports Head Dashboard</h3>
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
                  Add Game Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Set Sport Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Allocate Sports Coordinators
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Generate Result
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Generate Report
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SportsHeadDashBoard;
