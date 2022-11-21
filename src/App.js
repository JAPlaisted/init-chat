import React from "react";
import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCIbsZJVSf-tJO2dJzr4_DGNPMApp65ZaQ",
  authDomain: "superchat-7b816.firebaseapp.com",
  projectId: "superchat-7b816",
  storageBucket: "superchat-7b816.appspot.com",
  messagingSenderId: "319306173968",
  appId: "1:319306173968:web:9a90868a05daa8fb99c495",
  measurementId: "G-7EPBB5KFV4",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
