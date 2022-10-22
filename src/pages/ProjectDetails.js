import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProjectData from "../repository/ProjectsData";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const thisProject = ProjectData.myProjects.find(
    (project) => project.id == projectId
  );

  let navigate = useNavigate();

  function changeLink(location) {
    navigate(location, { replace: true });
    window.location.reload();
  }
  return (
    <div id="portfolio-details" className="portfolio-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="portfolio-title">{thisProject.appName}</h2>

            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img src={thisProject.img} alt="no picture" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4 portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li>
                <strong>Category</strong>: {thisProject.category}
              </li>
              <li>
                <strong>Client</strong>: {thisProject.client}
              </li>
              {/* <li>
                <strong>Project date</strong>: 01 March, 2020
              </li> */}
              <li>
                <strong>Project URL</strong>:
                <a href={thisProject.projectUrl}>&nbsp;&nbsp;{thisProject.projectUrl}</a>
              </li>
            </ul>

            <p>{thisProject.description}</p>
            <Link
              className="nav-link"
              to="/#portfolio"
              onClick={() => changeLink("/#portfolio")}
            >
              <i className="bi bi-arrow-left">&nbsp;Go back</i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
