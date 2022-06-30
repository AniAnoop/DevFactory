import logo from "./images/logo_icon.svg";
import style from "./styles/style.css";
import gh_icon from "./images/genuinehome_icon.webp";
//import axios from "axios";
export default function App() {

// const navigate=useNavigate();
// const handleLoginClick=(e)=>{
//   e.preventDefault();
//   const url="http://localhost:8000/login";
// const data={
//   "name":"anjana",
//       "password":"1234",
//     };
//     const header={};
//     console.log("url==>"+url)
//     axios.post(url,data,header).then((res)=>{
//       console.log(res.data)
//       navigate("/home");
//     }).catch((err)=>{
//       console.log(err)
//     });
  
// };





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
        <div className="fr1_col2">
          <label>Already a member</label>
          <div>
            <button className="fr1_col2_b">Login</button>
          </div>
        </div>
      </div>
      <div className="register">
        <label>Great! You have completed 20%</label>
        <div className="register_col1">
          <img src={gh_icon} />
          <label>Trusted by Christians across the world!</label>
        </div>
        <div className="register_col2">
          <label>Please provide us with your basic details</label>
          <div className="register_col2_row1">
            <label>Date of birth
</label>
<insert className="register_col2_row1_insert"></insert>
          </div>
          <div className="register_col2_row2_insert">
            <label>Denomination</label>
          </div>
          <div className="register_col2_row3_insert">
            <label>Division</label>
          </div>
          <div className="register_col2_row4_insert">
            <label>Subcaste (optional)
</label>
          </div>
          <div className="register_col2_row5_insert">
            <label>Mother tongue
</label>
          </div>
          <div className="register_col2_row6_insert">
            <label>Email id
</label>
          </div>
          <div className="register_col2_row7_insert">
            <label>Password</label>
          </div>
          <div className="register_col2_button">
            <button>CONTINUE</button>
          </div>
        </div>
        <label>Copyright © 2022. All rights reserved. </label>
      </div>
    </>
  );
}
