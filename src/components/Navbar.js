import React from "react";
import { Link, useNavigate } from "react-router-dom";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import SocialLinks from "../repository/SocialLinksData";
import useScript from "../utils/UseScript";

function Navbar() {
  let scriptPath = process.env.PUBLIC_URL + "assets/vendor/";
  useScript(`${scriptPath}purecounter/purecounter.js`);
  useScript(`${scriptPath}bootstrap/js/bootstrap.bundle.min.js`);
  useScript(`${scriptPath}glightbox/js/glightbox.min.js`);
  useScript(`${scriptPath}isotope-layout/isotope.pkgd.min.js`);
  useScript(`${scriptPath}swiper/swiper-bundle.min.js`);
  useScript(`${scriptPath}waypoints/noframework.waypoints.js`);
  useScript(`${scriptPath}php-email-form/validate.js`);
  useScript(`${process.env.PUBLIC_URL}/assets/js/main.js`);

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
            {SocialLinks.socialLinks.map((social) =>
              social.link === "#" ? (
                <a
                  key={social.id}
                  href="#"
                  className={social.class}
                  rel="noreferrer"
                >
                  <i className={social.socialIcon}></i>
                </a>
              ) : (
                <a
                  key={social.id}
                  href={social.link}
                  className={social.socialClass}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={social.socialIcon}></i>
                </a>
              )
            )}
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