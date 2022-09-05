import downarrow from "./images/downarrow.png";
import logo from "./images/snowlogo.png";
//import { useNavigate } from 'react-router-dom'

import "./styles/style1.css";

//import { useState } from "react";
function Menu(){
 // const navigate = useNavigate()
  // const [modalshow, setModalShow] = useState(false);
  // function summarypage()
  // {
  //   navigate("/summary")
  // }
  // function projectcall()
  // {
  //   navigate("/project")
  // }
  // function logincall()
  // {
  //   navigate("/")
  // }


    return<>
   <div className="menubar">
        <img src={logo} />
        <div className="menubar_menu">
          <ul>
            <li>
              <label>Home</label>
            </li>
            <li>
              <label>Board</label>
            </li>
            <li>
              <label>Sprint </label>
              <div>
                <img src={downarrow} />
              </div>
            </li>
            <li>
              <label>Project</label>
            </li>
            <li>
              <label>Reports</label>
              <div>
                <img src={downarrow} />
              </div>
            </li>
            <li>
              <label>Reports</label>
              <div>
                <img src={downarrow} />
              </div>
            </li>
            <li>
              <label>Reports</label>
              <div>
                <img src={downarrow} />
              </div>
            </li>
          </ul>
        </div>
      </div>
 
    </>
}
export default Menu;
