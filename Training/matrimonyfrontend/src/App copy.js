import logo from "./images/logo_icon.svg";
import './styles/style.css'
export default function App() {
  return (
    <>
      <div className="firstrow">
        <div className="firstrow_col1">
          <div>
            <img src={logo} />
          </div>
          <div className="firstrow_col1_col1">
            <label>ChristianMatrimony.com </label>
            <label className="">From Matrimony.com Group</label>
          </div>
        </div>
        <div className="firstrow_col2">
          <label>Already a member?</label>
          <button className="firstrow_col2_button">Log In</button>
        </div>
      </div>
    </>
  );
}
