import React from "react";

function ForgetPassword2() {
  return (
    <>
      <div className="reg">
        <form>
          <div
            className="wrapper rounded bg-white"
            style={{ maxWidth: "500px", marginTop: "50px" }}
          >
            <div className="h3">Enter Password</div>
            <div className="form">
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

export default ForgetPassword2;
