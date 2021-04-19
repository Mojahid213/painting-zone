import React from "react";
import "./Services.css";
import InteriorImg from "../../../images/paint_bucket.png";
import ExteriorImg from "../../../images/paint.png";
import FurnitureImg from "../../../images/brush.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const allService = [
  {
    image: InteriorImg,
    title: "Interior Painting",
    price: 120,
    description:
      "we provide the best painting service in the entire world. We have highly professional painter with their professional skills. We paint almost every object in the world.",
  },
  {
    image: ExteriorImg,
    title: "Exterior Painting",
    price: 180,
    description:
      "we provide the best painting service in the entire world. We have highly professional painter with their professional skills. We paint almost every object in the world.",
  },
  {
    image: FurnitureImg,
    title: "Furniture Painting",
    price: 75,
    description:
      "we provide the best painting service in the entire world. We have highly professional painter with their professional skills. We paint almost every object in the world.",
  },
];

const Services = () => {
  return (
    <div className="services-main">
      <div>
        <h3>
          <span style={{ color: "#4C4B7D" }}>SERVICES</span> WE PROVIDE
        </h3>
      </div>
      <div className="mt-5 pt-2">
      <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
          {allService.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
