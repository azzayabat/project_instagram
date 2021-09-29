import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { FaFacebookSquare } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState({});

  // useEffect(() => {
  //   fetch("http://localhost:5000/user")
  //     .then((response) => response.json())
  //     .then((data) => setResult(data.total));
  // }, []);

  const LogIn = async () => {
    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("responsekjfnkjds", response);
        // console.log("res:", response);
      })
      .catch((error) => {
        console.log("======error sign up page=====:", error);
      });
  };

  return (
    <div className="container">
      <div className="borderIn">
        <div className="header">
          <h1 id="title">Instagram</h1>
        </div>
        {/* <div className="inputArea"> */}
        <form className="inputArea">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>

          <button type="button" id="login" onClick={LogIn}>
            Log in
          </button>
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
        </form>
        {/* </div> */}
      </div>
      <div className="bottomBox">
        <p id="bottomTitle">
          Don't have an account?{" "}
          <Link to="/signup">
            <a onClick={() => console.log("login page")}>Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
