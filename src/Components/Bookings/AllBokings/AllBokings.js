import React, { useContext, useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { userContext } from "../../../App";
import BookingsInfo from "../BookingsInfo/BookingsInfo";

const AllBokings = () => {
    //context api
    const[user,setUser] = useContext(userContext);
   const[bookings,setBookings] = useState([]);

   useEffect(()=>{
    fetch("https://calm-springs-36524.herokuapp.com/getBookings?email="+user.email)
    .then(res => res.json())
    .then(data => setBookings(data))
   },[])

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            ORDER SUMMERY
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/allbokings" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Bookings</CDBSidebarMenuItem>
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
      {/* All Booking items */}
      <div className="container mt-5 w-100">
            <div className="my-2">
                <h3 className="text-warning">Your Total Bookings: {bookings.length}</h3>
            </div>
            <div>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                  {
                    bookings.map(details => <BookingsInfo details={details}></BookingsInfo>)
                  }
                </div>
            </div>
      </div>
    </div>
  );
};

export default AllBokings;
