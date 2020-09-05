import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, About, Map, Vaccine, Wiki } from "./pages/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route path="/data" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
