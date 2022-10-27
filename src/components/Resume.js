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
                  with 2+ years of experience designing and developing
                  user-friendly websites and mobile apps from initial concept to
                  final, polished deliverable.
                </em>
                <br />
                I'm mostly experienced with FLUTTER for mobile app development,
                LARAVEL for api development, REACT JS for web development and
                ELECTRON for desktop app development.
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in ICT</h4>
              <h5>2018 - 2021</h5>
              <p>
                <em>Mzumbe University, Morogoro - Tanzania</em>
              </p>
              <p>
                Completed a bachelor degree in ICT basing mostly in software
                development
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
