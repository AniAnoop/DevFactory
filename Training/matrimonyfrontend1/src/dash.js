import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import gh_icon from "./images/gn_icon.webp";
export default function App() {
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
            Great! You have completed 20%
          </label>
        </div>
        <div className="register_row2">
          <div className="register_row3">
            <div className="register_row3_col1">
              <img src={gh_icon} width="70" />
              <label>Trusted by Christians across the world!</label>
            </div>
            <div className="register_row3_col2">
              
                <label>Please provide us with your basic details</label>
              
              <div className="register_row3_col2_row1">
              <div className="register_row3_col2_row2">
                <label>Date of birth</label>
                <input className="register_input1"></input>
              </div>
              <div className="register_row3_col2_row2">
                <label>Denomination</label>
                <input className="register_input1"></input>
              </div>
              <div className="register_row3_col2_row2">
                <label>Division</label>
                <input className="register_input1"></input>
              </div>
              <div className="register_row3_col2_row2">
                <label>Subcaste(optional)</label>
                <input className="register_input1"></input>
              </div>
              <div className="register_row3_col2_row2">
                <label>Mother tongue</label>
                <input className="register_input1"></input>
              </div>
              <div className="register_row3_col2_row2">
                <label>Email id</label>
                <input className="register_input1"></input>
              </div>
              <div className="register_row3_col2_row2">
                <label>Password</label>
                <input className="register_input1"></input>
              </div>

              <div className="register_row3_col2_button">
                <button className="register_button">CONTINUE</button>
              </div>
            </div>
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
