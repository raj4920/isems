import React from "react";
import SportsHeadDashBoard from "./SportsHeadDashBoard";

function SphSetSportSchedule() {
  return (
    <>
      <SportsHeadDashBoard />

      <div className="reg">
        <form>
          <div className="wrapper rounded bg-white">
            <div className="h3">Set Game Schedule</div>
            <div className="form">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Games</label>
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
                        Select Game
                      </option>
                      <option value="1">Cricket</option>
                      <option value="2">Chess</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <label className="label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    style={{ marginTop: "8px", height: "54%" }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  style={{
                    marginTop: "8px",
                    height: "54%",
                  }}
                  required
                />
              </div>
              <div className="col-md-6 mt-md-0 mt-3">
                <label className="label">Time</label>
                <input
                  defaultValue="04:20"
                  style={{
                    marginTop: "8px",
                    width: "100%",
                    height: "54%",
                    borderRadius: "4px",
                    className: "form-control",
                    borderColor: "lightgray",
                  }}
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300,
                  }}
                />
              </div>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="container-fluid" style={{ marginTop: "30px" }}>
        <h1>Sports Event Schedule</h1>
        <div class="row" style={{ marginTop: "30px" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <table id="example" class="table">
                  <thead style={{ fontSize: "18px" }}>
                    <th>Game Name</th>
                    <th>Dae</th>
                    <th>Time</th>
                    <th>Location</th>
                    {/* <th>Options</th> */}
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cricket</td>
                      <td>05-04-2022</td>
                      <td>09:00 AM</td>
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

export default SphSetSportSchedule;
