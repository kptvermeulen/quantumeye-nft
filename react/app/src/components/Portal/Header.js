import React from "react";
import "styles/Portal/header.css";
import { MdSettings } from "react-icons/md";
import { FaUserAlt, FaRegQuestionCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="Pheader">
      <div className=""></div>
      <div className="PHeaderIcons">
        <div className="PIconButton">
          <FaRegQuestionCircle />
        </div>
        <div className="PIconButton">
          <MdSettings />
        </div>
        <div className="PIconButton">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
}
