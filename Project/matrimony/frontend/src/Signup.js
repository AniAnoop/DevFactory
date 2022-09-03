import "./styles/style.css";
import logo from "./images/logo.svg";
import trust from "./images/trust.webp";
export default function Signup() {
  return (
    <>
      <div className="signup">
        <div className="signup_row1">
          <img src={logo} />
          <div className="signup_row1_label">
            <label className="signup_row1_label1">ChristianMatrimony.com</label>
            <label className="signup_row1_label2">
              From Matrimony.com Group
            </label>
          </div>
        </div>

        {/********************end row1*********************/}

        <div className="signup_row2">
          <div className="signup_row2_outer">
            <label className="signup_row2_outer_label">
              Great! You have completed
              <span>20%</span>
            </label>
            <div className="signup_row2_inner">
              <div className="signup_row2_inner_col1">
                <div>
                  <img src={trust} />
                </div>
                <label>Trusted by Christians across the world!</label>
              </div>
              <div className="signup_row2_inner_col2">
                <label className="signup_row2_inner_col2_label">Please provide us with your basic details</label>
                <div className="signup_row2_inner_col2_inner">
                  <div className="signup_row2_inner_col2_inner_row">
                    <label>Date of birth</label>
                    <input></input>
                  </div>
                  <div className="signup_row2_inner_col2_inner_row">
                    <label>Denomination</label>
                    <select>
                        <option>-------------------Select-------------------</option>
                    </select>
                  </div>
                  <div className="signup_row2_inner_col2_inner_row">
                    <label>Division</label>
                    <select>
                        <option>-------------------Select-------------------</option>
                    </select>
                  </div>
                  <div className="signup_row2_inner_col2_inner_row">
                    <label>Subcaste(optional)</label>
                    <input></input>
                  </div>
                  <div className="signup_row2_inner_col2_inner_row">
                    <label>Mother tongue</label>
                    <input></input>
                  </div>
                  <div className="signup_row2_inner_col2_inner_row">
                    <label>Email id</label>
                    <input></input>
                  </div>
                  <div className="signup_row2_inner_col2_inner_row">
                    <label>Password</label>
                    <input></input>
                  </div>
                  <div className="signup_row2_inner_col2_inner_row_button">
                    <button>SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup_row2_outer_end">
            <label>Copyright © 2022. All rights reserved.</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
