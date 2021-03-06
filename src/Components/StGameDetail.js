import React from "react";
import StudentDashBoard from "./StudentDashBoard";

function StGameDetail() {
  return (
    <>
      <StudentDashBoard />
      <div class="container-fluid" style={{ marginTop: "30px" }}>
        <h1> Game Details</h1>
        <div class="row" style={{ marginTop: "30px" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <table id="example" class="table">
                  <thead style={{ fontSize: "18px" }}>
                    <th>Game Name</th>
                    <th>Game Type</th>
                    <th>Game Location</th>
                    <th>Total Player</th>
                    {/* <th>Options</th> */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cricket</td>
                      <td>Team Game</td>
                      <td>Out Door</td>
                      <td>15</td>
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

export default StGameDetail;
