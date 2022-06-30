import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import user from "./images/userpic.png";
import profilepic from "./images/profilepic.webp";
import bgin from "./images/header-inner1.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function App() {
  const navigate = useNavigate();
  const [array, setArrayFunc]=useState([
    {
        "id": 12,
        "txtname": "beema",
        "dDOB": "2000-12-01T18:30:00.000Z",
        "txtreligion": "hindu"
    },
    {
        "id": 13,
        "txtname": "bilal",
        "dDOB": "2000-12-01T18:30:00.000Z",
        "txtreligion": "hindu"
    }
])
  const handleProfileClick = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/search";
    const data = {
      name: "b",
    };
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, data, header)
      .then((res) => {
        console.log(res.data);
        // alert(res.data.insertId);
        // navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/dash");
  };

  useEffect(() => {
    const url = "http://localhost:8000/search";
    const data = {
      name: "b",
    };
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, data, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  return (
    <>
      <div className="home">
        <div
          className="home_div1"
          style={{ backgroundImage: `url(${bgin})` }}
          width="100%"
        >
          <div className="home_div1_menu">
            <div className="home_div1_menu_row1">
              <img src={logo} width="40" />
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
              <img src={user} width="40" />
            </div>
          </div>
          <div className="home_div1_row2">
            <input size={100}></input>
            <button
              onClick={(e) => {
                handleProfileClick(e);
              }}
            >
              SEARCH
            </button>
          </div>
        </div>
        <div className="home_div2">
         
          {array.map((itm, indx) => {
            return (
              <div
                className="home_div2_prof1"
                onClick={(e) => {
                  handleProfileClick(e);
                }}
              ><label>{JSON.stringify(itm)} {indx}</label>
                <div>
                  <img
                    className="home_div2_prof1_img"
                    src={profilepic}
                    width="200"
                  />
                </div>
                <div className="home_div2_prof1_prof">
                  <div className="home_div2_prof1_prof_row">
                    <h className="home_head">{itm.txtname}</h>

                    <div className="home_div2_prof1_prof_row1">
                      <label className="home_label1"> 26 Years,5'5"</label>
                      <label className="home_label2">BHMS</label>
                    </div>
                    <div className="home_div2_prof1_prof_row1">
                      <label className="home_label1">Mumbai</label>
                      <label className="home_label2">Doctor</label>
                    </div>

                    <div className="home_div2_prof1_prof_row1">
                      <label className="home_label1">{itm.txtreligion}</label>
                      <label className="home_label2">₹ 0 - 1 Lakh</label>
                    </div>

                    <div className="home_div2_prof1_prof_row1">
                      <label className="home_label1">Bhumihar</label>
                      <label className="home_label2"></label>
                    </div>
                    <div className="home_div2_prof1_prof_row1">
                      <label className="home_label1">Hindi-UP/UK</label>
                      <label className="home_label2">Never Married</label>
                    </div>
                  </div>
                </div>
                <div className="home_empty"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
