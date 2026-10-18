import React from "react"
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MyApp from "./App.jsx";
import "./index.css"

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);

root.render(
  <HashRouter>
    <MyApp />
  </HashRouter>
)
