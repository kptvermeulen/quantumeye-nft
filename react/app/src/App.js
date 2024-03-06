import React from "react";

import "styles/popup.css";
import Home from "views/Home";
import PortalHome from "views/Portal/Home";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    { title: "Dashboard", id: "dashboard" },
    { title: "QEC fund", id: "qec-fund" },
    { title: "Staking", id: "staking" },
    { title: "Whale TV", id: "whale-tv" },
    { title: "Discord", id: "discord" },
    { title: "Trading View", id: "trading-view" },
    { title: "Vaults", id: "vaults" },
    (
      <Router>
        <Switch>
          <Route exact path="/portal">
            <PortalHome page="dashboard" />
          </Route>
          <Route exact path="/portal/dashboard">
            <Redirect to="/portal" />
          </Route>
          <Route exact path="/portal/qec-fund">
            <PortalHome page="qec-fund" />
          </Route>
          <Route exact path="/portal/staking">
            <PortalHome page="staking" />
          </Route>
          <Route exact path="/portal/whale-tv">
            <PortalHome page="whale-tv" />
          </Route>
          <Route exact path="/portal/discord">
            <PortalHome page="discord" />
          </Route>
          <Route exact path="/portal/trading-view">
            <PortalHome page="trading-view" />
          </Route>
          <Route exact path="/portal/vaults">
            <PortalHome page="vaults" />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  );
}

export default App;
