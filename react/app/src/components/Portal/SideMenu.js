import React from "react";
import "styles/Portal/side-menu.css";
import { useHistory } from "react-router-dom";
import Dasbhoard from "assets/icons/dashboard.svg";
import Money from "assets/icons/money.svg";
import Target from "assets/icons/staking.svg";
import Television from "assets/icons/television.svg";
import Trading from "assets/icons/staking.svg";
import Vault from "assets/icons/vault.svg";

export default function SideMenu({ page }) {
  const history = useHistory();

  const tabs = [
    {
      title: "Dashboard",
      id: "dashboard",
      img: Dasbhoard,
    },
    { title: "QEC fund", id: "qec-fund", img: Money },
    { title: "Staking", id: "staking", img: Target },
    { title: "Whale TV", id: "whale-tv", img: Television },
    { title: "Discord", id: "discord", img: Money },
    { title: "Trading View", id: "trading-view", img: Trading },
    { title: "Vaults", id: "vaults", img: Vault },
  ];

  return (
    <div className="PsideMenu">
      <div className="PsMLogo">
        <h2>Wallet</h2>
      </div>
      <div className="PsMUser">
        <div className="PsMUserPicture"></div>
        <h3>Not logged in</h3>
      </div>
      <div className="PmenuItems">
        {tabs.map((indTab, index) => {
          return (
            <div
              className="PmenuItem"
              onClick={() => {
                history.push("/portal/" + indTab.id);
              }}
            >
              <div className="PmIImage">
                <img src={indTab.img} alt="menuItem" />
              </div>
              <div className="PmITitle">{indTab.title}</div>
              {indTab.id === page ? <div className="PmISelected"></div> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
