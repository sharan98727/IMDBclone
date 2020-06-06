import "./header.css";
import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Navigation from "../Navigation"
//import Card from '../card/Card'
import SignIn from '../SignIn/Form'
import Container from '../CaroselContainer'

function template() {
  return (
    <div className="header">

<BrowserRouter>
     <Navigation  />
     
     <Route path="/" exact component={Container} />
   <Route path="/signin" component={SignIn} />
   </BrowserRouter>
      
   
    </div>
  );
};

export default template;
