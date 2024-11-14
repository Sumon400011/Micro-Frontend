import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./Cart";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: cart</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <Cart/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)