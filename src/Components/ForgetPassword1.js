import React from "react";

function ForgetPassword1() {
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
                <div className="emailid">
                  <label className="label">
                    Enter Email Id for sending forget password link
                  </label>
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

export default ForgetPassword1;
