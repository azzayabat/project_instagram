import React from "react";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Timeline from "./pages/Timeline";
// function PrivateRoute({ component: Component, authed, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authed === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// }
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/timeline" component={Timeline} />
        {/* <PrivateRoute authed={authed} path="/login" component={Login} /> */}
      </Switch>
    </Router>
  );
};

export default App;
