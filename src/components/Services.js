import React from "react";
import ServiceData from "../repository/ServiceData";
import ServiceList from './listData/ServiceList'

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <div className="row">
          {ServiceData.myServices.map((service, index) => (
            <ServiceList key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
