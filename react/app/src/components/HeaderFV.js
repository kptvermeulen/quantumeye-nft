import React from "react";
import HeaderImg from "./../assets/img/Banner.png";
import "styles/headerFV.css";

export default function HeaderFV({ discordLink }) {
  return (
    <div className="headerContainer">
      <div className="headerImg">
        <img src={HeaderImg} alt="header" />
      </div>
    </div>
  );
}
