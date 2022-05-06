import React from "react";
import DirectorDashBoard from "./DirectorDashBoard";
import "./Registration.css";

function DAddFaculty() {
  return (
    <>
      <DirectorDashBoard />
      <div className="reg">
        <div className="wrapper rounded bg-white">
          <form>
            <div className="h3">Add Faculty Details</div>
            <div className="form">
              {/* Student Enro & First Name */}
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">First Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Last Name</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>

              {/* Student Gender, Semester & Division */}
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Gender</label>
                  <div className="d-flex align-items-center mt-2">
                    <label className="option">
                      <input type="radio" name="radio" />
                      Male <span className="checkmark"></span>
                    </label>
                    <label className="option ms-4">
                      <input type="radio" name="radio" />
                      Female <span className="checkmark"></span>
                    </label>
                  </div>
                </div>

                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Designation</label>
                  <div className="d-flex align-items-center mt-2">
                    <select id="div" style={{ width: "100%" }} required>
                      <option value="" selected hidden>
                        Select Designation
                      </option>
                      <option value="sh">Sports Head</option>
                      <option value="sc">Sport Coordinator</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Student Contact Number & Email ID */}
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Phone Number</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
              </div>

              {/* Student Password */}

              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Password</label>
                  <input
                    id="pwd"
                    type="tel"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DAddFaculty;
