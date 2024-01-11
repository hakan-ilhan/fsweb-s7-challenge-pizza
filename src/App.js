import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Success from "./components/Success";
const App = () => {
  const [hakan, setHakan] = useState({});

  const changeHakan = (order) => {
    setHakan(order);
    console.log("order:", order);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pizza">
          <Pizza changeHakan={changeHakan} />
        </Route>
        <Route exact path="/succes">
          <Success hakan={hakan} />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
