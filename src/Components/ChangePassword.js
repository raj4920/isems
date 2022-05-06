import React from "react";

function ChangePassword() {
  return (
    <>
      <div className="reg">
        <form>
          <div
            className="wrapper rounded bg-white"
            style={{ maxWidth: "500px", marginTop: "50px" }}
          >
            <div className="h3">Change Password</div>
            <div className="form">
              <div className="row">
                <div className="opassword">
                  <label className="label">Old Password</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="row">
                <div className="npwd1">
                  <label className="label">New Password</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="row">
                <div className="npwd2">
                  <label className="label">Conform Password</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
