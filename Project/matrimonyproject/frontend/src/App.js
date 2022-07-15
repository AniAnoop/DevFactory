//import logo from './logo.svg';
//import './App.css';
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
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Button } from "react-bootstrap";

export default function App() {
  const [nameValue, setNameFunc] = useState("");
  const [mobNumber, setMobNumberFunc] = useState("");
  const navigate = useNavigate();
  const [proflfor, setProfileFor] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginname, setLoginNameFun] = useState("");
  const [loginpassword, setPasswordFun] = useState("");
  const [id,setId]=useState("");
  const handleNameClick = (e) => {
    e.preventDefault();
    setLoginNameFun(e.target.value);
  };
  const handlePasswordClick = (e) => {
    e.preventDefault();
    setPasswordFun(e.target.value);
  };

  const handleusernamechange = (e) => {
    e.preventDefault();
    setNameFunc(e.target.value);
  };

  const handMobileNo = (e) => {
    e.preventDefault();
    setMobNumberFunc(e.target.value);
  };

  const handleRegisterClick = (e)=> {
    e.preventDefault();
    const url = "https://59xv0oj7y1.execute-api.us-west-1.amazonaws.com/signup";
    var req = '{"txtprofilefor": "'+proflfor+'","txtname": "'+nameValue+'","txtmobileno": "'+mobNumber+'"}'
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("res"+JSON.stringify(res.data));
        var uid=res.data.insertId;
        setId(uid);
        localStorage.setItem("id",uid)
        alert("Registered");
        navigate("/dash");
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/dash");
  }

  // const clickHandler=(e)=>{
  //   e.preventDefault();
  //   navigate("/dash")
  // }

  const handleDropdown = (e) => {
    e.preventDefault();
    setProfileFor(e.target.value);
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    //const url = "http://localhost:8000/login";
    const url =
      "https://oq3c2ps58k.execute-api.us-west-1.amazonaws.com/login";
    var req='{ "txtname":"'+loginname+'","password":"'+loginpassword+'"}'
    // const data = {
    //   txtname: "loginname",
    //   password: "loginpassword",
    // };
    const header = {};
    console.log("url==>" + url);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);

        if (res.data.length > 0) {
          navigate("/home");
        } else {
          alert("Incorrect username or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          <label className="fr1_col2_label">Already a member</label>
          <div>
            <button
              className="fr1_login_button1"
              variant="primary"
              onClick={handleShow}
            >
              Login
            </button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Matrimony Id/Mobile No./E-mail
                <br />
                <input
                  className="login_input"
                  value={loginname}
                  onChange={(e) => {
                    handleNameClick(e);
                  }}
                ></input>
                <br />
                Password
                <br />
                <input
                  className="login_input"
                  value={loginpassword}
                  onChange={(e) => {
                    handlePasswordClick(e);
                  }}
                ></input>
                <br />
                <input type="checkbox"></input>
                <label className="fr1_label_checkbox">Keep me loggin</label>
                <br />
                <button
                  className="fr1_login_button2"
                  variant="primary"
                  onClick={(e) => {
                    handleLoginClick(e);
                  }}
                >
                  LOGIN
                </button>
                <br />
                <label className="login_label">
                  Forgot Password? | Login Via OTP
                </label>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
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
            <label className="fr2_l3">and</label>
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
