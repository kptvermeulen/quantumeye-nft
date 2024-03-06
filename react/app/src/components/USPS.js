import React from "react";
import CountUp from "react-countup";

export default function USPS() {
  return (
    <div className="maxWidthContainer">
      <div className="uspColumn column11">
        <div className="center uspContainer">
          <h2 style={{ marginRight: "15px" }}>
            <CountUp end={7777} duration={5} useEasing={true}></CountUp>
          </h2>
          <h3 className="coloredText">NFTs available</h3>
        </div>
        {/*<div className="center uspContainer">
          <h2 style={{ marginRight: "15px" }}>
            <CountUp end={50} duration={5} useEasing={true}></CountUp>K+
          </h2>
          <h3 className="coloredText">Members</h3>
        </div>*/}
        <div className="center uspContainer">
          <h2 style={{ marginRight: "15px" }}>
            <CountUp end={7777} duration={5} useEasing={true}></CountUp>
          </h2>
          <h3 className="coloredText">NFTs left</h3>
        </div>
      </div>
    </div>
  );
}
