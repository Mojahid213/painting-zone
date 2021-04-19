import React from "react";
import { Link } from "react-router-dom";
import "./Footers.css"


const Footers = () => {
  return (
    <div className="footer-main">
      <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Painting Zone</h5>

              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Services</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                   Interior painting
                  </Link>
                </li>
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                    Exterior painting
                  </Link>
                </li>
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                    Luxury painting
                  </Link>
                </li>
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                   Object painting
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Others</h5>

              <ul class="list-unstyled">
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                   About us
                  </Link>
                </li>
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                    Terms and condition
                  </Link>
                </li>
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                    payment mathod
                  </Link>
                </li>
                <li>
                  <Link to="/home" class="text-secondary nav-link">
                    subscribe
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="text-center p-3"
        >           
          <p>copyright© 2021 by Mojahid</p>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
