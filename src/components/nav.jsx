import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {Array(6)
          .fill("home")
          .map((item, index) => (
            <li key={index} className="nav-item">
              {item}
            </li>
          ))}
        <li className="summery">summery</li>
      </ul>
    </nav>
  );
};

export default Nav;
