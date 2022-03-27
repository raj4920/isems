import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StGameDetails from "./StGameDetail";

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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/sdh">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gd">
                  Game Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gp">
                  Game Participation
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/grs"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Game Result
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/gc"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Game Coordinators
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/gr"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Game Rules
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default StudentDashBoard;
