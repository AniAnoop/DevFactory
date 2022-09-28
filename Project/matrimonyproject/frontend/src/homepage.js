import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import user from "./images/userpic.png";
import profilepic from "./images/profilepic.webp";
import a6 from "./images/innerdiv.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function App() {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const [array, setArrayFunc] = useState([]);

  const handleSearchName = (e) => {
    e.preventDefault();
    setSearchName(e.target.value);
  };
  const handleProfileClick = (e, itm) => {
    e.preventDefault();
    localStorage.setItem("profileid", itm.id);
    navigate("/profile");
  };
  const handleSearchClick = (e) => {
    e.preventDefault();
    const url = "https://m2qb4sm1qc.execute-api.us-west-1.amazonaws.com/search";
    const req = '{"name": "'+searchName+'"}';
    const header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
        setArrayFunc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const url = "https://aejm9ebale.execute-api.us-west-1.amazonaws.com/tblusers";
    var req = {};
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
        setArrayFunc(res.data);
        // alert(res.data.insertId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">
      <div
        className="home_div1"
        style={{ backgroundImage: `url(${a6})`}}
        
      >
        <div className="home_div1_menu">
          <div className="home_div1_menu_row1">
            <img src={logo} width="45" />
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
            <img src={user} width="45" />
          </div>
        </div>
        <div className="home_div1_row2">
          <input
          className="home_input"
            size={90}
            value={searchName}
            onChange={(e) => handleSearchName(e)}
          ></input>
          <button className="home_button"
            onClick={(e) => {
              handleSearchClick(e);
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
                handleProfileClick(e, itm);
              }}
            >
              <div className="home_div2_prof1_imgdiv">
                <img
                  className="home_div2_prof1_img"
                  src={profilepic}
                  width="220"
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
                    <label className="home_label2">{itm.txtgender}</label>
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
  );
}
