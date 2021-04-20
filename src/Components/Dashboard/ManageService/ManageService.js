import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import AllServices from "../AllServices/AllServices";

const ManageService = () => {
  const [allservices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/getServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
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
            <NavLink
              exact
              to="/dashboard/orders"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="table">Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/dashboard/addservice"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="plus">Add Service</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/dashboard/menageservice"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="pen">Manage Service</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      {/* manage service section */}
      <div className="container text-center mt-5">
        <div className="mb-5">
          <h3 className="text-primary">Manage Services</h3>
        </div>
        <table class="table table-dark">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allservices.map(service => <AllServices service={service}></AllServices>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
