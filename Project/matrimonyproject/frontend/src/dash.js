import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import gh_icon from "./images/gn_icon.webp";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";

export default function App() {
  const navigate = useNavigate();
  const [dDOB,setDob]=useState("");
  const [religion,setReligion]=useState("");
  const [division,setDivision]=useState("");
  const [subcaste,setSubcaste]=useState("");
  const [mothertongue,setMotherToungue]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const handleDobclick=(e)=>{
    e.preventDefault();
    setDob(e.target.value)
  };
  const handleReligionclick=(e)=>{
    e.preventDefault();
    setReligion(e.target.value)
  };
  const handleDivisionclick=(e)=>{
    e.preventDefault();
    setDivision(e.target.value)
  };
  const handleCasteclick=(e)=>{
    e.preventDefault();
    setSubcaste(e.target.value)
  };
  const handleMothertoungueclick=(e)=>{
    e.preventDefault();
    setMotherToungue(e.target.value)
  };
  const handleMailclick=(e)=>{
    e.preventDefault();
    setEmail(e.target.value)
  };
  const handlePasswordclick=(e)=>{
    e.preventDefault();
    setPassword(e.target.value)
  };


  const handleRegisterClick = (e) => {
    e.preventDefault();
    
    const url = "http://localhost:8000/register";
    const data = {
      dob: dDOB,
    religion: religion,
    caste: division,
    subcaste: subcaste,
    mothertounge: mothertongue,
    email: email,
    password: password,
    id:"29",
    };
    const header={};
    console.log("url==>"+url)
    axios.post(url,data,header).then((res)=>{
      console.log(res.data)
      //alert(res.data.insertId)
     navigate("/home");
    }).catch((err)=>{
      console.log(err)
    });

    // navigate("/dash");
  };


  return (
    <>
      <div className="fr1">
        <div className="fr1_col1">
          <div>
            <img src={logo} />
          </div>
          <div className="fr1_col1_col2">
            <label>Christian Matrimony.com</label>

            <label className=" ">From Matrimony.com Group</label>
          </div>
        </div>
      </div>
      <div className="register">
        <div className="register_row1">
          <label className="register_row1_label">
            Great! You have completed
            <span>20%</span>
          </label>
        </div>
        <div className="register_row2">
          <div className="register_row3_col1">
            <img src={gh_icon} width="70" />
            <label>Trusted by Christians across the world!</label>
          </div>
          <div className="register_row3">
            <label>Please provide us with your basic details</label>

            <div className="register_row3_col2_row2">
              <label>Date of birth</label>
              <input 
              className="register_input1"
              value={dDOB}
              onChange={(e)=>{
                handleDobclick(e);
              }}

              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Denomination</label>
              <input 
              className="register_input1"
              value={religion}
              onChange={(e)=>{
              handleReligionclick(e);}}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Division</label>
              <input 
              className="register_input1"
              value={division}
              onChange={(e)=>{
                handleDivisionclick(e);}}
              
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Subcaste(optional)</label>
              <input 
              className="register_input1"
              value={subcaste}
              onChange={(e)=>{
                handleCasteclick(e);}}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Mother tongue</label>
              <input 
              className="register_input1"
              value={mothertongue}
              onChange={(e)=>{
                handleMothertoungueclick(e);}}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Email id</label>
              <input 
              className="register_input1"
              value={email}
              onChange={(e)=>{
                handleMailclick(e);}}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Password</label>
              <input 
              className="register_input1"
              value={password}
              onChange={(e)=>{
                handlePasswordclick(e);}}
              ></input>
            </div>

            <div className="register_row3_col2_button">
              <button
                className="register_button"
                onClick={(e) => {
                  handleRegisterClick(e);
                }}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>

        <div className="register_row4">
          <label>Copyright © 2022. All rights reserved. </label>
        </div>
      </div>
    </>
  );
}
