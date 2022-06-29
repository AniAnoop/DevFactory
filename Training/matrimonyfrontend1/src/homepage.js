import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import user from "./images/userpic.png";
import profilepic from "./images/profilepic.webp";
import bgin from "./images/header-inner1.jpg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function App() {
  const navigate=useNavigate();

  return (
    <>
      <div className="home">
        <div
          className="home_div1"
          style={{ backgroundImage: `url(${bgin})` }}
          // width="100%" 
        >
          <div className="home_div1_menu">
            <div className="home_div1_menu_row1">
              <img src={logo} width='40'/>
            </div>
            <div className="home_div1_menu_row2">
              <ul>
                <li>MY HOME</li>
                <li> SEARCH</li>
                <li>MATCHES</li>
                <li>MAILBOX</li>
                <li>UPGRADE NOW</li>
              </ul>
            </div>
            <div className="home_div1_menu_row3">
              <img src={user} width="30" />
            </div>
          </div>
          <div className="home_div1_row2">
            <input size={50}></input>
            <button>SEARCH</button>
          </div>
        </div>
        <div className="home_div2">
          <div className="home_div2_prof1" onClick={(e)=>{navigate("/profile") }}>
            <div>
              <img
                className="home_div2_prof1_img"
                src={profilepic}
                width="200"
              />
            </div>
            <div className="home_div2_prof1_prof" >
              <div className="home_div2_prof1_prof_row">
                <h className="home_head">WTTR**</h>
              </div>
              <div className="home_div2_prof1_prof_row1">
                <label> 26 Years,5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="home_div2_prof1_prof_row2">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>

              <div className="home_div2_prof1_prof_row3">
                <label>Hindhu, Brahmin</label>
                <label>₹ 0 - 1 Lakh</label>
              </div>

              <div className="home_div2_prof1_prof_row4">
                <label>Bhumihar</label>
                <label></label>
              </div>
              <div className="home_div2_prof1_prof_row5">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div>
          </div>
          <div className="home_div2_prof1">
            <div>
              <img
                className="home_div2_prof1_img"
                src={profilepic}
                width="200"
              />
            </div>
            <div className="home_div2_prof1_prof">
              <div className="home_div2_prof1_prof_row">
                <h className="home_head">WTTR**</h>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label> 26 Years,5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>

              <div className="home_div2_prof1_prof_row">
                <label>Hindhu, Brahmin</label>
                <label>₹ 0 - 1 Lakh</label>
              </div>

              <div className="home_div2_prof1_prof_row">
                <label>Bhumihar</label>
                <label></label>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div>
          </div>
          <div className="home_div2_prof1">
            <div>
              <img
                className="home_div2_prof1_img"
                src={profilepic}
                width="200"
              />
            </div>
            <div className="home_div2_prof1_prof">
              <div className="home_div2_prof1_prof_row">
                <h className="home_head">WTTR**</h>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label> 26 Years,5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>

              <div className="home_div2_prof1_prof_row">
                <label>Hindhu, Brahmin</label>
                <label>₹ 0 - 1 Lakh</label>
              </div>

              <div className="home_div2_prof1_prof_row">
                <label>Bhumihar</label>
                <label></label>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div>
          </div>
          <div className="home_div2_prof1">
            <div>
              <img
                className="home_div2_prof1_img"
                src={profilepic}
                width="200"
              />
            </div>
            <div className="home_div2_prof1_prof">
              <div className="home_div2_prof1_prof_row">
                <h className="home_head">WTTR**</h>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label> 26 Years,5'5"</label>
                <label>BHMS</label>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label>Mumbai</label>
                <label>Doctor</label>
              </div>

              <div className="home_div2_prof1_prof_row">
                <label>Hindhu, Brahmin</label>
                <label>₹ 0 - 1 Lakh</label>
              </div>

              <div className="home_div2_prof1_prof_row">
                <label>Bhumihar</label>
                <label></label>
              </div>
              <div className="home_div2_prof1_prof_row">
                <label>Hindi-UP/UK</label>
                <label>Never Married</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
