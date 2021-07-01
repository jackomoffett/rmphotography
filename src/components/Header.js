import React, { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <header className="App-header">
        <div className="App-header-logo">
          <p>Rachel Moffett</p> <p>PHOTOGRAPHY</p>
        </div>
        <div
          className="App-header-burger"
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </div>
        <ul className="App-header-links">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/photography"}>Photography</Link>
          </li>
        </ul>
        {!showMenu ? (
          <ul className="App-header-links-burger">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/photography"}>Photography</Link>
            </li>
          </ul>
        ) : null}
        {/* <div className="App-header-socials">
          <a href="https://www.facebook.com/RachelMoffettphotography">
            Facebook
          </a>
        </div> */}
      </header>
    </>
  );
};

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return <Link to={`/${page}`}>{title}</Link>;
};

export default Header;
