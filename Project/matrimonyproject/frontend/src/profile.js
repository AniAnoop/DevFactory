import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import user from "./images/userpic.png";
import profilepic from "./images/profilepic.webp";
//import bgin from "./images/header-inner1.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [array, setArrayFunc] = useState([
    {
      id: "1",
      txtname: "anjana",
      txtprofilefor: "relative",
      txtreligion: "hindu",
      txtcaste: "ezhava",
      mothertoungue: "malayalam-Kerala",
      txtgender: "female",
    },
    {
      id: "2",
      txtname: "nijila",
      txtmobileno: "1234569870",
      txtprofilefor: "self",
      txtreligion: "christian",
      mothertoungue: "malyalam",
      txtgender: "female",
    },
  ]);
  useEffect(() => {
    var a = localStorage.getItem("profileid");
    //alert(a);
    const url = "https://sh08sey6p1.execute-api.us-west-1.amazonaws.com/profile";
    var req = '{"id": "a"}';
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.req);
        setArrayFunc(res.req);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="profile">
        <div className="profile_div1_menu">
          <div className="profile_div1_menu_row1">
            <img src={logo} width="40" />
          </div>
          <div className="profile_div1_menu_row2">
            <ul>
              <li>MY HOME</li>
              <li> SEARCH</li>
              <li>MATCHES</li>
              <li>MAILBOX</li>
              <li>UPGRADE NOW</li>
            </ul>
          </div>
          <div className="profile_div1_menu_row3">
            <img src={user} width="50" />
          </div>
        </div>
        <div className="profile_div2">
          <div className="profile_div2_prof1">
            <img
              className="profile_div2_prof1_img"
              src={profilepic}
              width="250"
            />
          </div>
          <div className="profile_div2_prof1_prof1">
            <div className="profile_div2_prof1_prof_row">
              {array.map((itm, indx) => {
                return <h1 className="profile_head">{itm.txtname}</h1>;
              })}
            </div>
            <div className="profile_label1">
              {array.map((itm, map) => {
                return (
                  <label className=" profile_label2">
                    E5939741 | Profile created by {itm.txtprofilefor} | Active -
                    1 week ago
                  </label>
                );
              })}
            </div>
            <div>
              <label class className="profile_label2">
                Verified
              </label>
            </div>
            <div className="profile_ul">
              {array.map((itm, indx) => {
                return (
                  <ul>
                    <li>27 years and 9 months, 4'7"</li>
                    <li>Mother Tongue is {itm.mothertoungue}</li>
                    <li>Trivandrum,Kerala</li>
                  </ul>
                );
              })}
              <ul>
                <li>Lives in Rangat</li>
                <li>Studied in B.A. Degree</li>
                <li>Not working</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profile_div2_prof1_about">
          <h3>About Her</h3>
          <label>I belong to a middle class family with moderate values</label>
          <label>27 years and 9 months, 4'7"</label>
        </div>
      </div>
    </>
  );
}
