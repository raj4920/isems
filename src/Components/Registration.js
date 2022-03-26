import React from "react";
import "./Registration.css";

export default function Registration() {
  return (
    <>
      <div className="reg">
        <div className="wrapper rounded bg-white">
          <div className="h3">Registration Form</div>
          <div className="form">
            {/* Student Enro & First Name */}
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Enrollment Number</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">First Name</label>
                <input type="text" className="form-control" required />
              </div>
            </div>

            {/* Student Middle Name & Last Name */}
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Middle Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Last Name</label>
                <input type="text" className="form-control" required />
              </div>
              {/* <div className="col-md-6 mt-md-0 mt-3">
              {" "}
              <label>Birthday</label>{" "}
              <input type="date" className="form-control" required />{" "}
            </div> */}
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
                <label className="label">Semester & Division</label>
                <div className="d-flex align-items-center mt-2">
                  <select id="sem" required>
                    <option value="" selected hidden>
                      Semester
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

                  <select id="div" required>
                    <option value="" selected hidden>
                      Division
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
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
                <input id="pwd" type="tel" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="btn btn-primary mt-3">Submit</div>
        </div>
      </div>
    </>
  );
}
