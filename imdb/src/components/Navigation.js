import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import IMDB from "./Home";
import Menu from "./Home";
import Search from "./Home";
import IMDbPro from "./Home";
import WatchList from "./Home";
import SignIn from "./Home";

const Navigation = () => {
  return (
    <div>
      <Switch>
        <Route path exact="/">
          <Home />
        </Route>
        <Route path exact="/">
          <IMDB />
        </Route>
        <Route path exact="/">
          <Menu />
        </Route>
        <Route path exact="/">
          <Search />
        </Route>
        <Route path exact="/">
          <IMDbPro />
        </Route>
        <Route path exact="/">
          <WatchList />
        </Route>
        <Route path exact="/">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
};

export default Navigation;

