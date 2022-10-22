import React from "react";
import ServiceData from "../repository/ServiceData";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <div className="row">
          {ServiceData.myServices.map((service) => (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" key={service.id}>
              <div className="icon-box w-100">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>
                  <a href="#">{service.name}</a>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
