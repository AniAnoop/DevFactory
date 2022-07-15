import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import gh_icon from "./images/gn_icon.webp";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const navigate = useNavigate();
  const [dDOB, setDob] = useState("");
  // const [selectreligion, setReligion] = useState("");
  const [division, setDivision] = useState("");
  const [subcaste, setSubcaste] = useState("");
  const [mothertongue, setMotherToungue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectVal, setSelectVal] = useState();
  const [array, setArrayFunc] = useState([]);
  // {
  //   "religion_id": "1",
  //   "religion": "Christian",
  // },
  // {
  //   "religion_id":" 2",
  //   "religion": "Hindu",
  // },
  // {
  //   "religion_id": "3",
  //   "religion": "Muslim",
  // },
  // ]);

  const handleDobclick = (e) => {
    e.preventDefault();
    setDob(e.target.value);
  };
  const handleDropdown = (e) => {
    e.preventDefault();
    setSelectVal(e.target.value);
  };
  useEffect(() => {
    const url =
      "https://s2hj1ji6a4.execute-api.us-west-1.amazonaws.com/religion";
    const data = {};
    const header = {};

    axios
      .post(url, data, header)
      .then((res) => {
        console.log("RES", res.data);
        setArrayFunc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDivisionclick = (e) => {
    e.preventDefault();
    setDivision(e.target.value);
  };
  const handleCasteclick = (e) => {
    e.preventDefault();
    setSubcaste(e.target.value);
  };
  const handleMothertoungueclick = (e) => {
    e.preventDefault();
    setMotherToungue(e.target.value);
  };
  const handleMailclick = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordclick = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    var id = localStorage.getItem("id");
    const url =
      "https://h001ier480.execute-api.us-west-1.amazonaws.com/register";
    const data =
      '{"dob":"' +
      dDOB +
      '","religion": "' +
      selectVal +
      '","caste": "' +
      division +
      '","subcaste": "' +
      subcaste +
      '","mothertongue": "' +
      mothertongue +
      '","email": "' +
      email +
      '","password": "' +
      password +
      '","id": "' +
      id +
      '"}';
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, data, header)
      .then((res) => {
        console.log(res.data);
        setArrayFunc(res.data);
        if (res.req.affectedRows > 0) {
          alert("Registration Completed Sucessfully!");
          navigate("/");
        } else {
          alert("Not Registered!");
        }
      })
      .catch((err) => {
        console.log(err);
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
              {/* <DatePicker selected={date} onChange={(date)=>setDate(date)} dateFormat="MMMM d,"></DatePicker> */}
              <input
                className="register_input1"
                value={dDOB}
                type="Date"
                // DatePicker={mm-dd-yyyy}
                onChange={(e) => {
                  handleDobclick(e);
                }}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Denomination</label>
              <select
                onChange={(e) => handleDropdown(e)}
                value={selectVal}
                className="fr2_select"
                placeholder="select"
              >
                {array.map((itm, indx) => {
                  return (
                    <option value={itm.religion_id}>{itm.religion}</option>
                    // <option>Christian</option>
                    // <option>Hindu</option>
                    // <option>Muslim</option>
                  );
                })}
              </select>
            </div>
            <div className="register_row3_col2_row2">
              <label>Division</label>
              <input
                className="register_input1"
                value={division}
                onChange={(e) => {
                  handleDivisionclick(e);
                }}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Subcaste(optional)</label>
              <input
                className="register_input1"
                value={subcaste}
                onChange={(e) => {
                  handleCasteclick(e);
                }}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Mother tongue</label>
              <input
                className="register_input1"
                value={mothertongue}
                onChange={(e) => {
                  handleMothertoungueclick(e);
                }}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Email id</label>
              <input
                className="register_input1"
                value={email}
                onChange={(e) => {
                  handleMailclick(e);
                }}
              ></input>
            </div>
            <div className="register_row3_col2_row2">
              <label>Password</label>
              <input
                className="register_input1"
                value={password}
                onChange={(e) => {
                  handlePasswordclick(e);
                }}
              ></input>
            </div>

            <div className="register_row3_col2_button">
              <button
                className="register_button"
                onClick={(e) => {
                  handleRegisterClick(e);
                }}
              >
                SUBMIT
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
