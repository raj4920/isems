import React from "react";
import StudentDashBoard from "./StudentDashBoard";
//import { Link } from "react-router-dom";

function StGameCoordinator() {
  return (
    <>
      <StudentDashBoard />
      <div class="container-fluid" style={{ marginTop: "30px" }}>
        <h1>Game Coordinators</h1>
        <div class="row" style={{ marginTop: "30px" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <table id="example" class="table">
                  <thead style={{ fontSize: "18px" }}>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Game Name</th>
                    {/* <th>Options</th> */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>Raj</td>
                      <td>Zalavadiya</td>
                      <td>9714995568</td>
                      <td>raj@gmail.com</td>
                      <td>Cricket</td>
                    </tr>
                    <tr>
                      <td>Raj</td>
                      <td>Zalavadiya</td>
                      <td>9714995568</td>
                      <td>raj@gmail.com</td>
                      <td>Cricket</td>
                    </tr>
                    <tr>
                      <td>Raj</td>
                      <td>Zalavadiya</td>
                      <td>9714995568</td>
                      <td>raj@gmail.com</td>
                      <td>Cricket</td>
                    </tr>
                    <tr>
                      <td>Raj</td>
                      <td>Zalavadiya</td>
                      <td>9714995568</td>
                      <td>raj@gmail.com</td>
                      <td>Cricket</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StGameCoordinator;
