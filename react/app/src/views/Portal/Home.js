import React from "react";
import Header from "components/Portal/Header";
import SideMenu from "components/Portal/SideMenu";
import PDashboard from "components/Portal/PDashboard";
import PQECFund from "components/Portal/PQECFund";
import "styles/Portal/main.css";

export default function Home({ page }) {
  function Content() {
    if (page === "dashboard") {
      return <PDashboard />;
    } else if (page === "qec-fund") {
      return <PQECFund />;
    } else {
      return "";
    }
  }

  return (
    <div className="PcontentContainer">
      <div className="PmaxWidthContainer PsideBarColumn">
        <SideMenu page={page} />
        <div className="PcontentColumn">
          <Header />
          <div className="Pcontainer">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}
