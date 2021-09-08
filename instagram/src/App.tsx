import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="borderIn">
        <p>Instagram</p>
        <div>
          <input type="text" name="e-mail" placeholder="email"></input>
        </div>
        <div>
          <input type="text" name="e-mail" placeholder="password"></input>
        </div>
        <button>Log In</button>
      </div>
    </div>
  );
}

export default App;
