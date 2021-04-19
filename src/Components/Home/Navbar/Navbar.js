import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
import { userContext } from "../../../App";

const Navbar = () => {
  let history = useHistory();
  const handleLoginBtn = () =>{
      history.push("/login")
  }
  // context api 
  const[user,setUser] = useContext(userContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container d-flex">
        <Link class="navbar-brand" to="/home">
         <h5><span style={{color:'#4C4B7D'}}>P</span>ainting <span style={{color:'#4C4B7D'}}>Z</span>one</h5>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse justify-content-end navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link text-dark text-center" aria-current="page" to="/home">
              Home
            </Link>
            <Link class="nav-link text-dark text-center" to="/#">
              About Us
            </Link>
            <Link class="nav-link text-dark text-center" to="/#">
              Our Team
            </Link>
            <Link class="nav-link text-dark text-center" to="/#">
              Contact
            </Link>

            {user.isSignedIn ?
             <Link class="nav-link text-dark text-center" to="/dashboard">
             Dashboard
           </Link>
            :<button onClick={handleLoginBtn} className="btn btn-success">
            Login
            </button>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
