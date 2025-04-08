/* import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setCount(data.message));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Test words</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>{!count ? "Loading..." : count}</p>
      </header>
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App  */

//below code block is from the tutorial, above code block is default by Vite


// client/src/App.js

/* import React from "react";
import reactLogo from './assets/react.svg'
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App; */



//import React, { useState, useEffect } from "react";
import "./App.css";
import * as React from 'react';


function App() {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

 /*  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    }; */

  return (
    
  <div className="App">
      <h1>{message}</h1>
  <div className="container">
  <div className="row mt-5">
    <div className="col-sm-12">

      <form>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="option1"
              checked={true}
              className="form-check-input"
            />
            Api
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name="react-tips"
              value="option2"
              className="form-check-input"
            />
            Message test
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">
            Save
          </button>
        </div>

      </form>

    </div>
  </div>
</div>
</div>

  );
}

export default App
