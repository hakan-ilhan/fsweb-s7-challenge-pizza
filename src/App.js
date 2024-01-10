import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import Pizza from "./components/Pizza";
import Success from "./components/Success";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/succes">
          <Success />
        </Route>
      </Switch>
    </Router>


  );
};
export default App;
