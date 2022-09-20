import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
      document.querySelector('nav').classList.add('NavbarScrollTop5')
    }else{
      document.querySelector('nav').classList.remove('NavbarScrollTop5')
    }
  }
    const shownav = () =>{
      const navul = document.getElementById('navul')
      navul.classList.toggle('showNavIndexUl')
    }
  return (
    <div className="NavBody">
      <nav className="NavIndex">
        <div className="navMedia">
          <div className="logo">
            <h1>DevCoder</h1>
          </div>
          <div className="BtnClick">
            <button id="ShowNav" onClick={shownav}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <ul className="NavUlIndex" id="navul">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              Portfolio
            </Link>
          </li>
          <li >
            <Link className="link" to="/contactus">
              Contac Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
