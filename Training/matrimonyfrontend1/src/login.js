//import logo from "./images/logo_icon.svg";
import React, { useState } from "react";
import "./styles/style.css";
import { useNavigate } from "react-router-dom";
import close from "./images/close.svg";
export default function App() {
  //   const [nameValue, setNameFunc]=useState("")
  //   const [mobNumber, setMobNumberFunc]=useState("")
     const navigate=useNavigate();

  //   const clickHandler=(e)=>{
  //     e.preventDefault();
  //     navigate("/dash")
  //   }

  return (
    <>
      <div className="outer_div">
        <div className="login">
          <div className="login_div1">
            <div className="login_label">
              <label><h3>Login</h3></label>
            </div>
            <button className="close_button"
              type="button"
              class="btn-close"
              aria-dismiss="close" 
            >
              <img src={close} width="10px" />
            </button>
          </div>
          <div className="login_email">
            <div className="login_inner_div">
              <label>Matrimony Id/Mobile No./E-mail</label>
              <input className="login_input"></input>

              <label>Password</label>
              <input className="login_input"></input>

              <div className="login_checkbox">
                <input type="checkbox"></input>
                <label>Keep me logged in</label>
              </div>

              <button className="login_button" onClick={(e)=>{navigate("/home") }}>LOGIN</button>

              <label>Forgot Password? | Login Via OTP</label>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
