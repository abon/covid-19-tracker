import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, About, Map, Vaccine, Wiki } from "./pages/index";
import { Navbar, QuickFactsBox } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/data" component={Home} exact />
        <Route path="/map" component={Map} exact />
      </Switch>
    </div>
  );
}

export default App;
