import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import user from "./images/userpic.png";
import profilepic from "./images/profilepic.webp";
//import bgin from "./images/header-inner1.jpg";

export default function App() {
  return (
    <>
      <div className="profile">
        <div className="profile_div1_menu">
          <div className="profile_div1_menu_row1">
            <img src={logo} />
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
            <img src={user} width="40" />
          </div>
        </div>
        <div className="profile_div2">
          <div className="profile_div2_prof1">
            <img
              className="profile_div2_prof1_img"
              src={profilepic}
              width="200"
            />
          </div>
          <div className="profile_div2_prof1_prof1">
            <div className="profile_div2_prof1_prof_row">
              <h1 className="profile_head">Aswathy AB</h1>
            </div>
            <div className="profile_label1">
              <label className=" profile_label2">
                E5939741 | Profile created by Self | Active - 1 week ago
              </label>
            </div>
            <div>
              <label class className="profile_label2">Verified</label>
            </div>
            <div className="profile_ul" >
              <ul>
                <li>27 years and 9 months, 4'7"</li>
                <li>Mother Tongue is Malayalam</li>
                <li>24 Manai Telugu Chettiyar</li>
                </ul>
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
