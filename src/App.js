import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, About, Map, Vaccine, Info } from "./pages/index";
import { Navbar, QA } from "./components/index";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/data" component={Home} exact />
        <Route path="/map" component={Map} exact />
        <Route path="/info" component={Info} exact />
        <Route path="/vaccine" component={Vaccine} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </div>
  );
}

export default App;
