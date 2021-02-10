import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {Layout}/>
      </Switch>
    </Router>
  );
};

export default App;