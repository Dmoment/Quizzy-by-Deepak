import React,{useState, useEffect} from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/Layout"
import { ToastContainer } from "react-toastify";
import { registerIntercepts, setAuthHeaders } from "../src/apis/axios";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    registerIntercepts();
    setAuthHeaders(setLoading);
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component = {Layout}/>
      </Switch>
    </Router>
  );
};

export default App;