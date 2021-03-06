import React from "react";
import { Link } from "react-router-dom";

function SportCoordinatorDashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <h3 className="text-light">Sport Coordinator Dashboard</h3>
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/sportcoordinatordashboard/pd"
                >
                  Participant Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sportcoordinatordashboard/as">
                  Add Score
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sportcoordinatordashboard/ar">
                  Annous Result
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sportcoordinatordashboard/grs"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Game Rules
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

export default SportCoordinatorDashboard;
