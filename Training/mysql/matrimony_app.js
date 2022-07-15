import logo from "./images/logo_icon.svg";
import React, { useState } from "react";
import "./styles/style.css";
import a1 from "./images/a1.webp";
import a2 from "./images/a2.webp";
import a3 from "./images/a3.webp";
import a4 from "./images/a4.webp";
import a5 from "./images/a5.webp";
import bg from "./images/bg.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Modal } from "bootstrap/Modal";
import { Button } from "react-bootstrap/Button";
export default function App() {
  const [nameValue, setNameFunc] = useState("");
  const [mobNumber, setMobNumberFunc] = useState("");
  const navigate = useNavigate();
  const [proflfor, setProfileFor] = useState("");
  const [show,setshow]=useState(false);
  const handleClose=()=>setShow(false);
  const handleShow=()=>setShow(true);

  const handleusernamechange = (e) => {
    e.preventDefault();
    setNameFunc(e.target.value);
  };

  const handMobileNo = (e) => {
    e.preventDefault();
    setMobNumberFunc(e.target.value);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/signup";
    const data = {
      profilefor: proflfor,
      name: nameValue,
      mobileno: mobNumber,
    };
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, data, header)
      .then((res) => {
        console.log(res.data);

        alert("Registered");
        navigate("/dash");
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/dash");
  };

  // const clickHandler=(e)=>{
  //   e.preventDefault();
  //   navigate("/dash")
  // }

  const handleDropdown = (e) => {
    e.preventDefault();
    setProfileFor(e.target.value);
  };
  return (
    <>
      <div className="fr1">
        <div className="fr1_col1">
          <div>
            <img src={logo} />
          </div>
          <div className="fr1_col1_col2">
            <label>Christian Matrimony.com{proflfor}</label>

            <label className=" ">From Matrimony.com Group</label>
          </div>
        </div>
        <div className="fr1_col2">
          <label>Already a member</label>
          <div>
            <button
              className="fr1_col2_b"
              onClick={(e) => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="fr2" style={{ backgroundImage: `url(${bg})` }}>
        <div className="fr2_main">
          <label className="fr2_l1">
            No. 1 and official matrimony service exclusively for Christians
          </label>
          <label className="fr2_l2">Meet your Christian soulmate here!</label>
          <div></div>
          <div className="fr2_row">
            <div className="fr2_div1">
              <label className="fr2_l4">Matrimonial Profile For</label>
              <select
                onChange={(e) => handleDropdown(e)}
                value={proflfor}
                className="fr2_select"
                placeholder="select"
              >
                <option>Select</option>
                <option>self</option>
                <option>Relative</option>
                <option>Friends</option>
              </select>
            </div>

            <div className="fr2_div2">
              <label className="fr2_l4">Name</label>
              <input
                className="fr2_input1"
                placeholder="Name"
                value={nameValue}
                onChange={(e) => handleusernamechange(e)}
              />
            </div>
            <div className="fr2_div3">
              <label className="fr2_l4">Mobile Number</label>
              <input
                className="fr2_input2"
                placeholder=" Mobile Number"
                value={mobNumber}
                onChange={(e) => handMobileNo(e)}
              />
            </div>
            <div className="fr2_div4">
              <button
                className="fr2_button"
                onClick={(e) => {
                  handleRegisterClick(e);
                }}
              >
                Register Free
              </button>
            </div>
          </div>
          <div className="fr2_div5">
            <label className="fr2_l3">
              By clicking on Register Free, you agree
            </label>
            <label className="f2_label1">to Terms & Conditions</label>
            <label>and</label>
            <label className="f2_label1">Privacy Policy</label>{" "}
          </div>
        </div>
      </div>
      <div className="fr3">
        <ul>
          <li>
            <img src={a1} className="fr3_image" />

            <label>
              10+ year jnj s of service in helping Christians cherish the
              meaning of Happy Marriage
            </label>
          </li>
          <li>
            <img src={a2} className="fr3_image" />

            <label>
              2 Lakh+ people have found their life partner using our services
            </label>
          </li>
          <li>
            <img src={a3} className="fr3_image" />
            <label>
              2020's winner of 'India's Growth Champions Award' by The Economic
              Times
            </label>
          </li>
          <li>
            <img src={a4} className="fr3_image" />
            <label>
              1 Lakh+ genuine profiles with 100% verified phone numbers
            </label>
          </li>
          <li>
            <img src={a5} className="fr3_image" />

            <label>130+ branches across India to serve you better</label>
          </li>
        </ul>
      </div>
    </>
  );
}
