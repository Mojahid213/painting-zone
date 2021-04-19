import React from "react";
import painting from "../../../images/header_bg.jpg";
import "./Header.css"
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"

const Header = () => {
  return (
    <div className="header-main">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="p-5">
            <div className="row">
              <div style={{backgroundColor:'#4C4B7D'}} className="text-light col-md-6 p-0 d-flex align-items-center header-detail border-md-0">
                <div className="m-4">
                <h1 className="header-detaild-heading">We Make Everything Colourful</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  aut inventore ipsam assumenda, magnam ratione.
                </p>
                <button className="btn btn-danger p-2">Get Started <i class="bi bi-arrow-right"></i></button>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <div className="">
                <img src={painting} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
