import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import {NavLink} from 'react-router-dom';


const ManageService = () => {
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
              <NavLink exact to="/dashboard/orders" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Orders</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/dashboard/addservice" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="plus">Add Service</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/dashboard/menageservice" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="pen">
                  Manage Service
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
        {/* manage service section */}
        <div>
          <h3>Manage service</h3>
        </div>
      </div>
    );
};

export default ManageService;