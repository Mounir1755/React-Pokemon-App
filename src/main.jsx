import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Routing from "./components/routing.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routing></Routing>
  </BrowserRouter>
);
