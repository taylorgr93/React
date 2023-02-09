import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirtsApp } from "./FirtsApp";
import { CounterApp } from "./CounterApp";
import CV from "./CV";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CV /> */}
    {/* <FirtsApp title="Hola, Soy Vegeta" /> */}
    <CounterApp value={123} />
  </React.StrictMode>
);
