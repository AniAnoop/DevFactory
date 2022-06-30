//import logo from "./images/logo_icon.svg";
import React, { useState } from "react";
import "./styles/style.css"; import { useNavigate } from "react-router-dom";
import close from "./images/close.svg";
import axios from "axios";
export default function App() {
 
     const navigate=useNavigate();
     const [loginname,setLoginNameFun]=useState("");
     const [loginpassword,setPasswordFun]=useState("");
     
     const handleNameClick=(e)=>{
      e.preventDefault();
      setLoginNameFun(e.target.value)
    };
    const handlePasswordClick=(e)=>{
      e.preventDefault();
      setPasswordFun(e.target.value)
    };
  const handleLoginClick = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/login";
    const data = {
      name:"setLoginNameFun",
      password:"setPasswordFun",
    };
    const header={};
    console.log("url==>"+url)
    axios.post(url,data,header).then((res)=>{
      console.log(res.data)
      // alert(res.data.insertId)
      // navigate("/home");
    }).catch((err)=>{
      console.log(err)
    });
  };
//navigate("/home")
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
              <input className="login_input"
              value={loginname}
              onChange={(e)=>{handleNameClick(e)}}
              ></input>

              <label>Password</label>
              <input className="login_input"
              value={loginpassword}
              onChange={(e)=>{handlePasswordClick(e)}}></input>

              <div className="login_checkbox">
                <input type="checkbox"></input>
                <label>Keep me logged in</label>
              </div>

              <button className="login_button" onClick={(e)=>{handleLoginClick(e)}}>LOGIN</button>

              <label>Forgot Password? | Login Via OTP</label>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
