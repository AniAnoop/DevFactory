import React from "react";
import "./Adminrelated.css";
import { IoIosAddCircle } from "react-icons/io";
import {BsThreeDots} from "react-icons/bs";
import monitor from "./Images/adminlist_a_monitor.jpg";

export default function Adminrelated() {
  return (
    <>
      <div className="adminrelated">
        <div className="adminrelated_inner">
          <div className="adminrelated_inner_row1">
            <label>Related Products</label>
            <BsThreeDots style={{color:'#C3CAD9'}}/>
          </div>
          <div className="adminrelated_inner_row2">
            <Singleadminrelated image={monitor} title={"Apple iPad 2022"} price={"$500"}/>
            <Singleadminrelated image={monitor} title={"Apple iPad 2022"} price={"$500"}/>
            <Singleadminrelated image={monitor} title={"Apple iPad 2022"} price={"$500"}/>
            <Singleadminrelated image={monitor} title={"Sumsung Galaxy Tab New"} price={"$500"}/>
            <Singleadminrelated image={monitor} title={"Apple Mac Book Pro"} price={"$500"}/>
            <Singleadminrelated image={monitor} title={"Amazon Smart Speaker"} price={"$500"}/>
          </div>
          <div className="adminrelated_inner_row3">
            <button>
              <IoIosAddCircle  style={{color:'#C3CAD9' ,paddingRight:'10px'}}/>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Singleadminrelated({image,title,price}) {
  return (
    <>
      <div className="singleadminrelated">
        <div className="singleadminrelated_inner">
            <div className="singleadminrelated_inner_img">
                <img src={image} width={30} height={30}/>
            </div>
            <label className="singleadminrelated_inner_label1">{title}</label>
            <label className="singleadminrelated_inner_label2">{price}</label>
        </div>
      </div>
    </>
  );
}
