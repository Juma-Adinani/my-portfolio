import React from "react";

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
                LARAVEL for api development, REACT JS for web development and ELECTRON for desktop app development.
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
            <div className="resume-item">
              <h4>Fullstack Developer</h4>
              <h5>June, 2022 - present</h5>
              <p>
                <em>J&P Electronics Company, Arusha - Tanzania</em>
              </p>
              
                <ul>
                  <li>Developed a company website.</li>
                  <li>
                    Developed a food delivery app for a restaurant in Arusha
                    (Nouri Cafe)
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate mobile app development
                  </li>
                  <li>Teaching students the basics of web development</li>
                </ul>
              
            </div>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>2021 - 2022</h5>
              <p>
                <em>Huduma Bomba Technologies, Dar Es Salaam - Tanzania</em>
              </p>
              
                <ul>
                  <li>
                    Collaborate in the design, development, and implementation
                    of projects; instadalali web app and niwezeshe app
                  </li>
                  {/* <!-- <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> --> */}
                </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
