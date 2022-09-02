import "./styles/style.css";
import logo from "./images/logo.svg";
export default function Signup() {
  return (
    <>
      <div className="signup">
        <div className="signup_row1">
          <img src={logo} />
          <div className="signup_row1_label">
            <label className="signup_row1_label1">ChristianMatrimony.com</label>
            <label className="signup_row1_label2">From Matrimony.com Group</label>
          </div>
        </div>
        <div className="signup_row2"></div>
      </div>
    </>
  );
}
