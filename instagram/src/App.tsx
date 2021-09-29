import React from "react";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Timeline } from "./pages/Timeline";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/timeline " component={Timeline} />
      </Switch>
    </Router>
  );
};

export default App;
