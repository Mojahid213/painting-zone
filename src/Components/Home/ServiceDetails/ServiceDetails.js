import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  return (
    <div class="col">
      <div class="card h-100 services-cards">
        <div>
          <img
            src={service.image}
            class="card-img-top services-icons"
            alt="services_icons"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{service.title}</h5>
          <p class="card-text">{service.description}</p>
        </div>
                <h6>Cost: ${service.price}</h6>
      </div>
    </div>
  );
};

export default ServiceDetails;
