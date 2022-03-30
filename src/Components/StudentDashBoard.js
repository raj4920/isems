import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import StGameDetails from "./StGameDetail";
// import StGameParticipation from "./StGameParticipation";

function StudentDashBoard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <h3 className="text-light">Student Dashboard</h3>
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
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/sdh">
                  Home
                </a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/studentdashboard/gd">
                  Game Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentdashboard/gp">
                  Game Participation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/studentdashboard/grs"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Game Result
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/studentdashboard/gc"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Game Coordinators
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/studentdashboard/gr"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Game Rules
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default StudentDashBoard;
