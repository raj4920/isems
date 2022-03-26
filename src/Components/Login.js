import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="reg">
        <div
          className="wrapper rounded bg-white"
          style={{ maxWidth: "500px", marginTop: "50px" }}
        >
          <div className="h3">Login Form</div>
          <div className="form">
            <div className="row">
              <div className="email">
                <label className="label">Email Id</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="row">
              <div className="pwd">
                <label className="label">Password</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
          </div>
          <div className="btn btn-primary mt-3">Submit</div>

          <div className="text-center" style={{ marginTop: "10px" }}>
            <a href="/login">Forget Password ?</a>
            <p>
              Not a member ?<a href="/Registration">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
