import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import {NavLink} from 'react-router-dom';
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"  

const OrderSidebar = () => {
    return (
        <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            ORDER SUMMERY
          </a>
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
              <CDBSidebarMenuItem icon="pen">
                Review
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/home"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="home">
                Home
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    );
};

export default OrderSidebar;