import React from 'react';
import log from "./images/mguniversity.jpg";
import './styles/style.css';
export default function App() {
  return (
    <div classname="fr">
       <div classname="fr_col1">
        <img src={log}/>
        <label>MG UNIVERSITY</label>
    </div>
    <div classname="fr_col2">
      <div classname="fr_col2_col1" ><button classname="fr_col2_button">Login</button></div>
      <div><label classname=" ">Sign Up</label></div>   
        
    </div>
    </div>
  );
}


