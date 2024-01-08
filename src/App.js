import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import Order from "./components/Order";
import Succes from "./components/Succes";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/succes">
          <Succes />
        </Route>
      </Switch>
    </Router>


  );
};
export default App;
