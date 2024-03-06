import React from "react";
import dashboardBackground from "assets/img/DashboardBackground.png";

export default function PDashboard() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          width: "calc(100% - 40px)",
          height: "calc(100% - 40px)",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <h2 className="whiteGradientText">coming soon</h2>
      </div>

      <div style={{ filter: "blur(20px)", width: "100%", height: "100%" }}>
        <img
          src={dashboardBackground}
          style={{
            width: "110%",
            height: "auto",
            position: "absolute",
            top: 0,
            left: "-20px",
          }}
          alt="dashboard"
        />
      </div>
    </div>
  );
}
