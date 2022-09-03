import logo from "./images/logo.svg";
import a1 from "./images/a1.webp";
import a2 from "./images/a2.webp";
import a3 from "./images/a3.webp";
import a4 from "./images/a4.webp";
import a5 from "./images/a5.webp";
import bg from "./images/background.webp";
import "./styles/style.css";
import {useNavigate} from "react-router-dom";
import React from "react";
// import './App.css';

function App() {
  const navigate=useNavigate();
  return (
    <>
      <div>
        <div className="home_row1">
          <div className="home_row1_left">
            <div className="home_row1_left_img">
              <img src={logo} />
            </div>
            <div className="home_row1_left_text">
              <label className="home_row1_left_text_label1">
                ChristianMatrimony.com
              </label>
              <label className="home_row1_left_text_label2">
                From Matrimony.com Group
              </label>
            </div>
          </div>
          <div className="home_row1_right">
            <label>Already a member?</label>
            <button>Log In</button>
          </div>
        </div>

        {/************************************************** */}

        <div className="home_row2" style={{backgroundImage:`url(${bg})`}}>
          <div className="home_row2_inner">
            <label className="home_row2_inner_label1">
              No. 1 and official matrimony service exclusively for Christians
            </label>
            <label className="home_row2_inner_label2">
              Meet your Christian soulmate here!
            </label>
            <div className="home_row2_inner_row1">
              <tr>
                <td className="home_row2_inner_row1_col">
                  <label>Matrimony Profile For</label>
                  <select>
                    <option>SELECT</option>
                  </select>
                </td>
                <td className="home_row2_inner_row1_col1">
                  <label>Name</label>
                  <input placeholder="Name"></input>
                </td>
                <td className="home_row2_inner_row1_col">
                  <label>Mobile Number</label>
                  <input placeholder="Mobile number"></input>
                </td>
                <td className="home_row2_inner_row1_col_button">
                  <button onClick={(e)=>{navigate("/signup")}}>Register Free</button>
                </td>
              </tr>
            </div>
            <div className="home_row2_tremCondition">
              <label className="home_row2_tremCondition_label1">
                By clicking on Register Free, you agree to
              </label>
              <label className="home_row2_tremCondition_label2">
                Terms & Conditions
              </label>
              <label className="home_row2_tremCondition_label1">and</label>
              <label className="home_row2_tremCondition_label2">
                Privacy Policy
              </label>
            </div>
          </div>
        </div>

        {/***************************************************/}

        <div className="home_row3">
          <ul>
            <li>
              <div>
                <img src={a1} />
              </div>
              <label>
                10+ years of service in helping Christians cherish the meaning
                of Happy marriage
              </label>
            </li>
            <li>
              <div>
                <img src={a2} />
              </div>
              <label>
                2 Lakh+ people have found their life partner using our services
              </label>
            </li>
            <li>
              <div>
                <img src={a3} />
              </div>
              <label>
                2020's winner of 'India's Growth Champions Award' by The
                Economic Times
              </label>
            </li>
            <li>
              <div>
                <img src={a4} />
              </div>
              <label>
                1 Lakh+ genuine profiles with 100% verified phone numbers
              </label>
            </li>
            <li>
              <div>
                <img src={a5} />
              </div>
              <label>130+ branches across India to serve you better</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
