import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "cart/Cart";
import Product from "product/Product";

import "./index.css";

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="display-2 text-center">Micro Frontend Host</h1>
      </div>
    </div>
    
    <div className="row">
      <div className="col-6 text-center border">
        <Cart />
      </div>
      <div className="col-6 text-center border">
        <Product />
      </div>
    </div>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)