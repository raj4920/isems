import React from "react";
import { Link } from "react-router-dom";

function DirectorDashBoard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <h3 className="text-light">Director Dashboard</h3>
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
                <Link className="nav-link" to="/directordashboard/af">
                  Add Faculty
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/directordashboard/vfd">
                  View Faculty Details
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/directordashboard/gr">
                  Generate Report
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/directordashboard/vss"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  View Sport Schedule
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

export default DirectorDashBoard;
