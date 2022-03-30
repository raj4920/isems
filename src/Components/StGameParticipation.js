import { findAllByAltText } from "@testing-library/react";
import React, { useState } from "react";
import "./StGameParticipation.css";
import StudentDashBoard from "./StudentDashBoard";

function StGameParticipation() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <StudentDashBoard />
      <div className="reg">
        <div className="wrapper rounded bg-white">
          <div className="h3">Game Participation</div>
          <div className="form">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Gender</label>
                <div className="d-flex align-items-center mt-2">
                  <label className="option">
                    <input
                      type="radio"
                      name="radio"
                      value="I"
                      onClick={() => setVisible(false)}
                    />
                    Individual Games <span className="checkmark"></span>
                  </label>
                  <label className="option ms-4">
                    <input
                      type="radio"
                      name="radio"
                      value="T"
                      onClick={() => setVisible(true)}
                    />
                    Team Games <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Semester & Division</label>
                <div className="d-flex align-items-center mt-2">
                  <select id="gname" required>
                    <option value="" selected hidden>
                      Select Game
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="Captain Enrollment No."
                  />
                </div>
              </div>

              {visible && (
                <div className="row">
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 2 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 3 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 4 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 5 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 6 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 7 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 8 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 9 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 10 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 11 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 12 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 13 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 14 Enrollment No."
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-md-0 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Member 15 Enrollment No."
                      required
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="btn btn-primary mt-3">Submit</div>
        </div>
      </div>
    </>
  );
}

export default StGameParticipation;
