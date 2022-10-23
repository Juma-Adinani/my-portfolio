import React from "react";
import { Link } from "react-router-dom";
import ProjectData from "../repository/ProjectsData";

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
          {ProjectData.myProjects.map((project) => (
            <div className={project.divFilterClass} key={project.id}>
              <div className="portfolio-wrap">
                <img src={project.img} className="img-fluid" alt="empty image" />
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.appName}</p>
                  <div className="portfolio-links">
                    {project.projectUrl === "empty" ? (
                      <Link
                        to="/404"
                        // href={project.projectUrl}
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className=""
                        title="Portfolio Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    ) : (
                      <a
                        // to={`/project-detail/${project.id}`}
                        href={project.projectUrl}
                        data-gallery="portfolioDetailsGallery"
                        data-glightbox="type: external"
                        className=""
                        title="Portfolio Details"
                        target="_blank"
                      >
                        <i className="bx bx-link"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
