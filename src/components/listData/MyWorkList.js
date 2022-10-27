import React from "react";
import { Link } from "react-router-dom";

const MyWorkList = ({ project }) => {
  return (
    <div className={project.divFilterClass} key={project.id}>
      <div className="portfolio-wrap">
        <img src={project.img} className="img-fluid" alt="empty" />
        <div className="portfolio-info">
          <h4>{project.title}</h4>
          <p>{project.appName}</p>
          <div className="portfolio-links">
            {project.projectUrl === "empty" ? (
              <Link
                to="/503"
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
                rel="noopener noreferrer"
              >
                <i className="bx bx-link"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorkList;
