import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <>
      <div className="signup">
        <div className="signup_inner">
          <h2>Create An Account</h2>
          <div className="signup_inner_row_label1">
            <label>Registering makes checkout fast and easy </label>
            <label>and saves your order information </label>
            <label>in your account.</label>
          </div>
          <div className="signup_inner_row">
            <input placeholder="FirstName"></input>
          </div>
          <div className="signup_inner_row">
            <input placeholder="LastName"></input>
          </div>
          <div className="signup_inner_row">
            <input placeholder="Email"></input>
          </div>
          <div className="signup_inner_row">
            <input placeholder="Password"></input>
          </div>
          <div className="signup_inner_row">
            <input placeholder="Re-Password"></input>
          </div>
          <div className="signup_inner_row">
            <button>Register</button>
          </div>
          <div className="signup_inner_row_label2">
            <label>By creating an account, you agree to our</label>
            <label> Terms of Use and Privacy Policy.</label>
          </div>
        </div>
      </div>
    </>
  );
}
