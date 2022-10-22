import React from "react";
import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Navbar() {
  let navigate = useNavigate();
  function changeLink(location) {
    navigate(location, { replace: true });
    window.location.reload();
  }
  return (
    <div>
      <header id="header">
        <div className="container">
          <h1>
            <a href="/">Juma Adinani</a>
          </h1>
          <h2>
            I'm a passionate&nbsp;&nbsp;&nbsp;
            <span>Web & Mobile App Developer</span>
          </h2>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/#about"
                  onClick={() => changeLink("/#about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/#resume"
                  onClick={() => changeLink("/#resume")}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/#services"
                  onClick={() => changeLink("/#services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/#portfolio"
                  onClick={() => changeLink("/#portfolio")}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/#contact"
                  onClick={() => changeLink("/#contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links">
            <a
              href="https://twitter.com/jumaadinani19"
              className="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://instagram.com/jumaadinani19"
              className="instagram"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://github.com/Juma-Adinani"
              className="linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </header>
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Navbar;
