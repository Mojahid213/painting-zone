import React, { useContext } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import Payments from "../Payments/Payments";
import "./Booking.css"
import { userContext } from "../../../App";


const Booking = () => {
  const[logedUser,setLogedUser] = useContext(userContext)
  return (
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                ORDER SUMMERY
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/allbokings" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">
                    Bookings
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/booking" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">Book</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/reviews" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="pen">Review</CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/home" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
          {/* Payment process */}
            <div className="container m-5 w-100">
                <div className="m-auto payment-form p-5">
                    <Payments></Payments>
                </div>
            </div>
        </div>
  );
};

export default Booking;
