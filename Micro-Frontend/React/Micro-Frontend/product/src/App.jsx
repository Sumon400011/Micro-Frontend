import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./Product";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: product</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <Product />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)