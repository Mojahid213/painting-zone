import React, { useEffect, useState } from "react";
import "./Services.css";
import ServiceDetails from "../ServiceDetails/ServiceDetails";


const Services = () => {
  const[allservice,setAllService] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5050/getServices')
    .then(res => res.json())
    .then(data => setAllService(data))
  },[])
  return (
    <div className="services-main">
      <div>
        <h3>
          <span style={{ color: "#4C4B7D" }}>SERVICES</span> WE PROVIDE
        </h3>
      </div>
      <div className="mt-5 pt-2">
      <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
          {allservice.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
