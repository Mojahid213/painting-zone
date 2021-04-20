import React from "react";
// import imgg from "../../../images/photo.jpeg"

const TestimonialDetails = ({ detail }) => {
  return (
    <div class="col">
      <div class="card h-100">
       <div className="card-header border-0">
            <div className="d-flex align-items-center">
               <div className="mx-1">
                   <img src={detail.photo} style={{width:'35px',borderRadius:'50%'}} alt=""/>
                </div> 
                <div className="mx-1">
                    <span style={{fontWeight:'bold', fontSize:'18px',display:'block'}}>{detail.name}</span>
                    <small className="ms-1">{detail.profession}</small>
                </div> 
            </div>
       </div>
        <div class="card-body">
          <p class="card-text">
            {
                detail.descriptioin
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
