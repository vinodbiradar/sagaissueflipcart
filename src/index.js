import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "firebase/auth";
import app from "firebase/app";

var config = {
  apiKey: "AIzaSyDeP_zsToFmB5NbIe4eJT4ZCnAMt22u3SE",
  authDomain: "flipcart-6d78e.firebaseapp.com",
  databaseURL: "https://flipcart-6d78e.firebaseio.com",
  projectId: "flipcart-6d78e",
  storageBucket: "flipcart-6d78e.appspot.com",
  messagingSenderId: "789607186397",
  appId: "1:789607186397:web:bffcca8bfddfa581610034",
  measurementId: "G-8P35W297W7",
};

if (!app.apps.length) {
  app.initializeApp(config);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
