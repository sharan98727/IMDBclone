import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

