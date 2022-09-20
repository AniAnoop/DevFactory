import React from "react";
import "./Admincategoryeditpopup.css";
import { MdOutlineClose } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
export default function Admincategoryeditpopup() {
  return (
    <>
      <div className="admincategoryeditpopup">
        <div className="admincategoryeditpopup_inner">
          <div className="admincategoryeditpopup_inner_row1">
            <label>Mobile phones</label>
            <MdOutlineClose style={{ color: "#C3CAD9" }} />
          </div>
          <div className="admincategoryeditpopup_inner_row2">
            <div className="admincategoryeditpopup_inner_row2_inner">
              <div className="admincategoryeditpopup_inner_row2_inner_row1">
                <div className="admincategoryeditpopup_inner_row2_inner_row1_col1">
                  <label>Identification Number</label>
                  <input placeholder="c10001"></input>
                </div>
                <div className="admincategoryeditpopup_inner_row2_inner_row1_col2">
                  <label>Name of category</label>
                  <input placeholder="Mobile Phones"></input>
                </div>
                <div className="admincategoryeditpopup_inner_row2_inner_row1_col2">
                  <label>Link</label>
                  <input placeholder="mobile-phones"></input>
                </div>
              </div>
              <div className="admincategoryeditpopup_inner_row2_inner_row2">
                <div className="admincategoryeditpopup_inner_row2_inner_row1_col1">
                  <label>Priority</label>
                  <input placeholder="12"></input>
                </div>
                <div className="admincategoryeditpopup_inner_row2_inner_row1_col2">
                  <label>Section</label>
                  <input placeholder="electronics"></input>
                </div>
                <div className="admincategoryeditpopup_inner_row2_inner_row1_col2">
                  <label>Products</label>
                  <input placeholder="26 products">
                    {/* <AiFillEye />  */}
                  </input>
                </div>
              </div>
              <div className="admincategoryeditpopup_inner_row2_inner_row3">
                <label>Description</label>
                <input placeholder="Online store offers a wide section of mobile phones, any of which can be bought by installments without overpayment."></input>
              </div>
              <div className="admincategoryeditpopup_inner_row2_inner_row4">
                <div className="admincategoryeditpopup_inner_row2_inner_row4_delete">
                  <MdDelete style={{ color: "#C3CAD9" }} />
                  <label>Delete Category</label>
                </div>
                <div className="admincategoryeditpopup_inner_row2_inner_row4_button">
                  <button>Save Category</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
