import React from "react";
import "styles/Portal/qec-fund.css";
import { BiDownload, BiUpload } from "react-icons/bi";

export default function PQECFund() {
  return (
    <div>
      <iframe
        src="//www.fxblue.com/fxbluechart.aspx?c=ch_cumulativereturn&id=quantum_eye_capital"
        frameborder="0"
        width="100%"
        height="350"
        title="FXBlue"
        style={{ borderRadius: "15px", zIndex: 10 }}
      ></iframe>
      <div
        style={{
          height: "350px",
          width: "50%",
          position: "absolute",
          borderRadius: "15px",
          top: "20px",
          left: "20px",
          zIndex: 5,
        }}
        className="center"
      >
        <div className="loading">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="PFContainer">
        <h2 className="PFCTitle">QEC Fund</h2>
        <p className="PFCParagraph">
          Pace your funds into the hands of QEC's team of elite financial market
          traders to harness the power of compound growth with no experience or
          effort.
        </p>
        <div className="flex" style={{ marginTop: "40px" }}>
          <div className="btn roundBtn" style={{ marginRight: "20px" }}>
            <BiUpload style={{ marginRight: "10px" }} />
            Withdraw
          </div>
          <div className="btn roundBtn">
            <BiDownload style={{ marginRight: "10px" }} />
            Deposit
          </div>
        </div>
      </div>
    </div>
  );
}
