import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import OrderedItems from "../OrderedItems/OrderedItems";

const Orders = () => {
  const[orders,setOrders] = useState([]);
  useEffect(()=>{
      fetch("https://calm-springs-36524.herokuapp.com/getOrders")
      .then(res => res.json())
      .then(data => setOrders(data))
  },[])
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
      {/* All Ordered Items */}
      <div className="container mt-5">
        <div>
          <table class="table table-sm table-dark">
            <thead>
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Price</th>
                <th scope="col">Client</th>
                <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map(order => <OrderedItems order={order}></OrderedItems>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
