import React from "react";
import "./Adminbasicinformation.css";
import { BsThreeDots } from "react-icons/bs";

export default function Adminbasicinformation() {
  return (
    <>
      <div className="Adminbasicinformation_outer">
        <div className="Adminbasicinformation_outer_row1">
          <label>Basic information</label>
          <BsThreeDots style={{ color: "#C3CAD9" }} />
        </div>
        <div className="Adminbasicinformation_outer_row2">
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Order Number
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              o10001
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Revenue
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              $1500
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Earnings
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              $300
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Order Date
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              22.05.2021
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Client
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              Seth Mendoza
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Order Status
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              Expectation
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Delivery Date
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              22.05.2021
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row1">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Country
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              United States
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row2">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Address
            </label>
            <label className="Adminbasicinformation_outer_row2_row1_label2">
              121 Blue Hill Rd,Hopewell Junction, NY 12533
            </label>
          </div>
          <div className="Adminbasicinformation_outer_row2_row3">
            <label className="Adminbasicinformation_outer_row2_row1_label1">
              Awaiting Payment
            </label>
            <button>Change Status</button>
          </div>
        </div>
      </div>
    </>
  );
}
