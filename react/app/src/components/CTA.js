import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function CTA({ discordLink }) {
  return (
    <div
      className="maxWidthContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "150px 0px",
      }}
    >
      <h2 className="centerH2">Are you ready to shatter the paradigm?</h2>
      <p
        style={{
          marginBottom: "60px",
          marginTop: "20px",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        ‘’If you don’t believe it or don’t get it, I don’t have the time to try
        to convince you, sorry.’’
        <br />
        Satoshi Nakamoto - the creator of Bitcoin.
      </p>
      <div className="flex CTAFlex">
        <a className="order2" href={discordLink} target="_blank">
          <div
            className="btn roundBtn"
            id="centerA"
            style={{ fontSize: "20px", marginRight: "30px", marginTop: "5px" }}
          >
            <FaDiscord
              style={{ marginRight: "10px", height: "25px", width: "25px" }}
            />
            Join Discord
          </div>
        </a>
        {/*<div
          className="btn roundBtn order1"
          onClick={() => {
            document.getElementById("scrollTop").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Mint yours now
        </div>*/}
      </div>
    </div>
  );
}
