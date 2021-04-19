import React from "react";
import { useHistory } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  let history = useHistory();


  //services cards click event
  const handleOrders = () =>{
    history.push('/orders');
  }
  return (
    <div className="col">
      <div onClick={handleOrders} className="card h-100 services-cards">
        <div>
          <img
            src={service.image}
            className="card-img-top services-icons"
            alt="services_icons"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{service.title}</h5>
          <p className="card-text">{service.description}</p>
        </div>
                <h6>Cost: ${service.price}</h6>
      </div>
    </div>
  );
};

export default ServiceDetails;
