import React from "react";
import "./App.css";
import { FaFacebookSquare } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="borderIn">
        <div className="header">
          <h1 id="title">Instagram</h1>
        </div>
        <div className="inputArea">
          <input
            type="text"
            name="e-mail"
            placeholder="Phone number, username, or email"
          ></input>
          <input type="text" name="e-mail" placeholder="Password"></input>
          <button id="login">Log In</button>
          <div className="divider">
            <div>OR</div>
          </div>
          <button id="loginFB">
            <span>
              <FaFacebookSquare size="20px" id="fbIcon" />
            </span>
            <span>Log in with Facebook</span>
          </button>
          <a className="forgetPass" href="/">
            Forget password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
