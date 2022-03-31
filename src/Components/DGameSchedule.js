import React from "react";
import DirectorDashBoard from "./DirectorDashBoard";

function DGameSchedule() {
  return (
    <>
      <DirectorDashBoard />
      <div class="container-fluid" style={{ marginTop: "30px" }}>
        <h1> Game Schedule</h1>
        <div class="row" style={{ marginTop: "30px" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <table id="example" class="table">
                  <thead style={{ fontSize: "18px" }}>
                    <th>Game Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    {/* <th>Options</th> */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cricket</td>
                      <td>12/12/2022</td>
                      <td>9 AM on words</td>
                      <td>Cricket Ground</td>
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

export default DGameSchedule;
