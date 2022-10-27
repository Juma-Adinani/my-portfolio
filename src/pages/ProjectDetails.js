import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProjectData from "../repository/ProjectsData";
import useScript from "../utils/UseScript";

const ProjectDetails = () => {

      let scriptPath = process.env.PUBLIC_URL + "assets/vendor/";
      useScript(`${scriptPath}purecounter/purecounter.js`);
      useScript(`${scriptPath}bootstrap/js/bootstrap.bundle.min.js`);
      useScript(`${scriptPath}glightbox/js/glightbox.min.js`);
      useScript(`${scriptPath}isotope-layout/isotope.pkgd.min.js`);
      useScript(`${scriptPath}swiper/swiper-bundle.min.js`);
      useScript(`${scriptPath}waypoints/noframework.waypoints.js`);
      useScript(`${scriptPath}php-email-form/validate.js`);
      useScript(`${process.env.PUBLIC_URL}/assets/js/main.js`);

  const { projectId } = useParams();
  const thisProject = ProjectData.myProjects.find(
    (project) => project.id === projectId
  );

  let navigate = useNavigate();

  function changeLink(location) {
    navigate(location, { replace: true });
    window.location.reload();
  }
  return (
    <main id="main">
      <div id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h2 class="portfolio-title">
                This is an example of portfolio detail
              </h2>

              <div class="portfolio-details-slider swiper">
                <div class="swiper-wrapper align-items-center">
                  <div class="swiper-slide">
                    <img
                      src={thisProject.img}
                      alt="nothing"
                    />
                  </div>

                  {/* <div class="swiper-slide">
                    <img
                      src="assets/img/portfolio/portfolio-details-2.jpg"
                      alt=""
                    />
                  </div>

                  <div class="swiper-slide">
                    <img
                      src="assets/img/portfolio/portfolio-details-3.jpg"
                      alt=""
                    />
                  </div> */}
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>

            <div class="col-lg-4 portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category</strong>: Web design
                </li>
                <li>
                  <strong>Client</strong>: ASU Company
                </li>
                <li>
                  <strong>Project date</strong>: 01 March, 2020
                </li>
                <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li>
              </ul>

              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
