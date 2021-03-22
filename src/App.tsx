import React from "react";

import logo from "./logo.svg";
import "./App.css";

import Calculator from "./containers/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="120" className="App-logo" alt="logo" />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
