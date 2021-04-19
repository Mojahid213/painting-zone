import React, { useContext } from "react";
import { useHistory } from "react-router";
import { userContext } from "../../../App";
import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  let history = useHistory();
  //context api
  const[theUser,setTheUser] = useContext(userContext);

  //services cards click event
  const handleOrders = () =>{
    history.push('/booking');
    const newDetail = {...theUser};
    newDetail.serviceName = service.title;
    newDetail.servicePrice = service.price;
    setTheUser(newDetail)
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
