import React from "react";
import "./Adminproductmain.css";
import { BsThreeDots } from "react-icons/bs";
import { IoMdLink } from "react-icons/io";
import {BsTypeBold} from "react-icons/bs";
import {RiFontSize2} from "react-icons/ri";
import {MdFormatItalic} from "react-icons/md";
import {AiOutlineUnderline} from "react-icons/ai";
import {AiOutlineFontColors} from "react-icons/ai";
import {AiOutlineAlignLeft} from "react-icons/ai";
import {MdFormatListNumbered} from "react-icons/md";
import {MdFormatListBulleted} from "react-icons/md";
import {MdStrikethroughS} from "react-icons/md";
import {MdOutlineFormatClear} from "react-icons/md";

export default function Adminproductmain() {
  return (
    <>
      <div className="adminproductmain">
        <div className="adminproductmain_col1">
          <div className="adminproductmain_col1_row1">
            <label>Main parameters</label>
            <BsThreeDots style={{ color: "#C3CAD9", fontSize: "18px" }} />
          </div>
          <div className="adminproductmain_col1_row2_outer">
            <div className="adminproductmain_col1_row2">
              <div className="adminproductmain_col1_row2_col1">
                <div className="adminproductmain_col1_row2_col1_row">
                  <label>Manufacturer</label>
                  <input placeholder="Apple"></input>
                </div>
                <div className="adminproductmain_col1_row2_col1_row">
                  <label>Identification Number</label>
                  <input placeholder="c10001"></input>
                </div>
                <div className="adminproductmain_col1_row2_col1_row">
                  <label>Section</label>
                  <div className="adminproductmain_col1_row2_row1_col_input">
                    <select placeholder="Electronics">
                      <option>Electronics</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="adminproductmain_col1_row2_col2">
                <div className="adminproductmain_col1_row2_col2_row">
                  <label>Modal</label>
                  <input placeholder="iPad Pro 2018 12.8"></input>
                </div>
                <div className="adminproductmain_col1_row2_col2_row">
                  <label>Priority</label>
                  <input placeholder="1"></input>
                </div>
                <div className="adminproductmain_col1_row2_col2_row">
                  <label>Category</label>
                  <div className="adminproductmain_col1_row2_row1_col_input">
                    <select placeholder="Monitors">
                    <option>Monitors</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="adminproductmain_col1_row3">
              <div className="adminproductmain_col1_row3_row">
                <label>Link</label>
                <div className="adminproductmain_col1_row3_row_input">
                  <input placeholder="apple-ipad-pro-12-8-2018" />
                  <IoMdLink style={{ color: "#C3CAD9", fontSize: "20px" }} />
                </div>
              </div>
              <div className="adminproductmain_col1_row3_row1">
                <label>Meta Title</label>
                <input placeholder="Apple iPad Pro 2018 12.8" />
              </div>
              <div className="adminproductmain_col1_row3_row1">
                <label>Meta Tags</label>
                <input placeholder="Apple iPad Pro 2018 12.8" />
              </div>
              <div className="adminproductmain_col1_row3_row1">
                <label>Meta Description</label>
                <input placeholder="Apple iPad Pro 2018 12.8" />
              </div>
            </div>
          </div>
        </div>
        <div className="adminproductmain_col2">
          <div className="adminproductmain_col2_row1">
            <div className="adminproductmain_col2_row1_outer">
              <div className="adminproductmain_col2_row1_outer_row1">
                <label>Prices and Warehouse</label>
                <BsThreeDots style={{ color: "#C3CAD9", fontSize: "18px" }} />
              </div>
              <div className="adminproductmain_col2_row1_outer_row2">
                <div className="adminproductmain_col2_row1_outer_row2_col1">
                  <div className="adminproductmain_col2_row1_outer_row2_col1_row">
                    <label>Cost</label>
                    <input placeholder="$432" />
                  </div>
                  <div className="adminproductmain_col2_row1_outer_row2_col1_row">
                    <label>Availability</label>
                    <div className="adminproductmain_col2_row1_outer_row2_col1_row_select">
                      <select placeholder="Yes" >
                        <option>Yes</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="adminproductmain_col2_row1_outer_row2_col1">
                  <div className="adminproductmain_col2_row1_outer_row2_col1_row">
                    <label>Extra</label>
                    <input placeholder="15%" />
                  </div>
                  <div className="adminproductmain_col2_row1_outer_row2_col1_row">
                    <label>Amount</label>
                    <input placeholder="320" />
                  </div>
                </div>
                <div className="adminproductmain_col2_row1_outer_row2_col1">
                  <div className="adminproductmain_col2_row1_outer_row2_col1_row">
                    <label>Price</label>
                    <input placeholder="$432" />
                  </div>
                  <div className="adminproductmain_col2_row1_outer_row2_col1_row">
                    <label>Warehouse</label>
                    <div className="adminproductmain_col2_row1_outer_row2_col1_row_select">
                      <select placeholder="$432" >
                        <option>432</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="adminproductmain_col2_row2">
            <div className="adminproductmain_col2_row2_inner">
              <div className="adminproductmain_col2_row2_inner_row1">
                <label>Description</label>
                <BsThreeDots style={{ color: "#C3CAD9", fontSize: "18px" }} />
              </div>
              <div className="adminproductmain_col2_row2_inner_row2">
                <div className="adminproductmain_col2_row2_inner_row2_row1">
                  <RiFontSize2 style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <BsTypeBold style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <MdFormatItalic style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <AiOutlineUnderline style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <AiOutlineFontColors style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <AiOutlineAlignLeft style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <MdFormatListNumbered style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <MdFormatListBulleted style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <MdStrikethroughS style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                  <MdOutlineFormatClear style={{ color: "#C3CAD9", fontSize: "20px" }}/>
                </div>
              </div>
              <div className="adminproductmain_col2_row2_inner_row3">
                <label>The new iPad combines the power and capability of a computer with the ease of use
                  and versatility you'd never expect from one. And now it's even more versatile, with a large 
                  10.2-inch Retina display, support for the full-size Smart Keyword,and the amazing new capabilitiesnof
                  iPodOS. it's unbelievably fun. And unmistakably iPad.
                </label>
              </div>
              <div className="adminproductmain_col2_row2_inner_row4">
              <label>
                  With iPad,getting work done is all hustle and no hassle. You can easily
                  edit a document while researching something on the web and making a 
                  Face Time call to a colleague at the same time. Manage all your files 
                  in one convenient spot with the Files app.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
