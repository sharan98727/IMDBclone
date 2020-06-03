import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="First-div">
      <nav>
        <ul className="navigation-bar">
          <li>
            <Link to="/IMDB" style={{ textDecoration: "none" }}>
              IMDB
            </Link>
          </li>
          <li>
            <Link to="/Menu" style={{ textDecoration: "none" }}>
              Menu
            </Link>
          </li>

          <li>
            <form>
              <input type="text" />
            </form>
          </li>
          <li>
            <form>
              <input type="submit" value="submit" />
            </form>
          </li>
          <li>
            <Link to="/IMDbPro" style={{ textDecoration: "none" }}>
              IMDbPro
            </Link>
          </li>
          <li>
            <Link to="/WatchList" style={{ textDecoration: "none" }}>
              WatchList
            </Link>
          </li>
          <li>
            <Link to="/SignIn" style={{ textDecoration: "none" }}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

