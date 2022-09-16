import React from "react";
import "./Payment.css";

export default function Payment() {
  return (
    <>
      <div className="payment">
        <div className="payment_outer">
          <div className="payment_outer_inner">
            <label>Payment method</label>
            <div className="payment_outer_inner_row1">
              <label>
                Total{" "}
                <label className="payment_outer_inner_row1_label1">
                  :{" "}
                  <label className="payment_outer_inner_row1_label2">
                    $199.00
                  </label>
                </label>
              </label>
            </div>
            <div className="payment_outer_inner_row2">
              <div className="payment_outer_inner_row2_row1">
                <input type="circlecheckbox" />
                <label>Cash on delivery</label>
              </div>
              <div className="payment_outer_inner_row2_row2">
                <input type="circlecheckbox" />
                <label>UPI</label>
              </div>
              <div className="payment_outer_inner_row2_row3">
                <input
                  type="circlecheckbox"
                  className="payment_outer_inner_row2_row3_input"
                />
                <label>Credit/Debit Card</label>
                <div className="payment_outer_inner_row2_row3_inner">
                  <input placeholder="Name on card" />
                  <input placeholder="Card Number" />
                  <label>Expiry on</label>
                  <div className="payment_outer_inner_row2_row3_date">
                    <div className="payment_outer_inner_row2_row3_date_col">
                      <label>D</label>
                      <select></select>
                    </div>
                    <div className="payment_outer_inner_row2_row3_date_col">
                      <label>M</label>
                      <select></select>
                    </div>
                    <div className="payment_outer_inner_row2_row3_date_col">
                      <label>Y</label>
                      <select></select>
                    </div>
                  </div>
                  <input placeholder="CVV Number" />
                </div>
              </div>
            </div>
            <div className="payment_outer_inner_button">
              <button> Make Payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
