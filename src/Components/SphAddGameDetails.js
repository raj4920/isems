import React from "react";
import SportsHeadDashBoard from "./SportsHeadDashBoard";

function SphAddGameDetails() {
  return (
    <>
      <SportsHeadDashBoard />
      <div className="reg">
        <div className="wrapper rounded bg-white">
          <div className="h3">Add Game Details</div>
          <div className="form">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Game Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Game Type</label>
                <div className="d-flex align-items-center mt-2">
                  <label className="option">
                    <input type="radio" name="radio" value="I" />
                    Individual Games <span className="checkmark"></span>
                  </label>
                  <label className="option ms-4">
                    <input type="radio" name="radio" value="T" />
                    Team Games <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Game Location</label>
                <div className="d-flex align-items-center mt-2">
                  <label className="option">
                    <input type="radio" name="radio" value="I" />
                    Indoor Game <span className="checkmark"></span>
                  </label>
                  <label className="option ms-4">
                    <input type="radio" name="radio" value="T" />
                    Outdoor Game <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Team Size</label>
                <div className="d-flex align-items-center mt-2">
                  <select
                    id="tz"
                    style={{
                      display: "block",
                      width: "100%",
                      border: "1px solid #ddd",
                      padding: "10px",
                      borderRadius: "5px",
                      color: "#333",
                    }}
                    required
                  >
                    <option value="" selected hidden>
                      Select Team Size
                    </option>
                    <option value="1">1</option>
                    <option value="2">15</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="btn btn-primary mt-3">Submit</div>
        </div>
      </div>
      <div class="container-fluid" style={{ marginTop: "30px" }}>
        <h1>Added Games</h1>
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
                    <th>Team Size</th>
                    {/* <th>Options</th> */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cricket</td>
                      <td>Team Game</td>
                      <td>Outdoor Game</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>Chess</td>
                      <td>Individual Game</td>
                      <td>Indoor Game</td>
                      <td>1</td>
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

export default SphAddGameDetails;
