import React from "react";
import ResumeData from "../repository/ResumeData";
import ProfExpList from "./listData/ProfExpList";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Personal Experience</h4>
              <p>
                <em>
                  I'm a self-taught Innovative and deadline-driven Developer
                  with 4+ years of experience designing and developing
                  user-friendly websites and mobile apps from initial concept to
                  final, polished deliverable.
                </em>
                <br />
                I'm mostly experienced with FLUTTER for mobile app development,
                LARAVEL / SPRING BOOT for api development, ANGULAR / REACT JS for web
                development.
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Self taught programmer</h4>
              <h5>2018 - Present</h5>
              <p>
                <em>Youtube, Freecodecamp, Udemy</em>
              </p>
              <p>
                Learning;
                <ul>
                  <li>Computer programming (Php, Java, Javascript, Dart)</li>
                  <li>Application development (Angular, Flutter, Laravel, Spring Boot)</li>
                </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Advanced Secondary Education</h4>
              <h5>2016 - 2018</h5>
              <p>
                <em>Bwiru Boys' Secondary School, Mwanza - Tanzania</em>
              </p>
              {/* <!-- <p>Completed advanced secondary education with a second grade</p> --> */}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {ResumeData.professionalExperience.map((profExp, index) => (
              <ProfExpList key={index} profExp={profExp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
