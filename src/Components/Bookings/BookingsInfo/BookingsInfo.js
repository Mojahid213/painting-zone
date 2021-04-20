import React from "react";

const BookingsInfo = ({ details }) => {
  return (
    <div>
      <div class="col">
        <div class="card h-100 shadow">
          <div class="card-body">
            <h5 class="card-title fw-bold text-success">{details.serviceName}</h5>
            <h6 class="card-text text-dark">
                Price: ${details.servicePrice}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsInfo;
