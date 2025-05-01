import React from "react";
import "./nav.css";

const Nav = () => {
  const navigateTo = (url) => {
    window.location.href = url;
  };
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item" id="Home">
          Home
        </li>
        <li
          className="nav-item"
          id="Resume"
          onClick={() =>
            navigateTo(
              "https://docs.google.com/document/d/1SLfwcZ-aVV0b1-OvFsy308Ja8qyQBJgsOJfAozvG45U/edit?usp=sharing"
            )
          }>
          Resume
        </li>
        <li
          className="nav-item"
          id="Website"
          onClick={() =>
            navigateTo("https://tanishtirpathi.github.io/tanish/")
          }>
          websites
        </li>
        <li
          className="nav-item"
          id="content"
          onClick={() =>
            navigateTo("https://www.instagram.com/techwithtanish/")
          }>
          content
        </li>
        <li className="nav-item" id="blogs" onClick={() => navigateTo("https://github.com/tanishtirpathi")}>
          code  
        </li>
        <li
          className="summery "
          onClick={() =>
            navigateTo("https://www.instagram.com/tanish.tirpathi/")
          }>
summary        </li>
      </ul>
    </nav>
  );
};

export default Nav;
