import React from "react";
import ProjectData from "../repository/ProjectsData";
import MyWorkList from "./listData/MyWorkList";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Desktop</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {ProjectData.myProjects.map((project, index) => (
            <MyWorkList key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
