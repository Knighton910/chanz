import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import chanzLogo from "../assets/chanzLogo.png";
import youlogo from "../assets/you.png";
import kissLogo from "../assets/kiss.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          {/* <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li> */}
          <Link className="items" to="/">
            Home
          </Link>
          <Link className="items" to="/tour">
            Tour
          </Link>
          <Link className="items" to="/about">
            About
          </Link>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
};
export default Navbar;
