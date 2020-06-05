import "./header.css";
import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Navigation from "../Navigation"
import SignIn from '../SignIn/Form'

function template() {
  return (
    <div className="header">
    <BrowserRouter>
     <Navigation />
     <Route path="/signin" component={SignIn} />
      
    </BrowserRouter>
    </div>
  );
};

export default template;
