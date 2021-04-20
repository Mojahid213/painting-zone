import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Addservice.css";
import axios from "axios";

const Addservice = () => {
  const[theImg,setTheImg] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Sending Image to the server
  const handleImageUpload = (event) =>{
      console.log(event.target.files[0]);
      const imageData = new FormData();
      imageData.set('key','4e88654a96ebef595ad500c0f2c47363');
      imageData.append('image',event.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        const Img_Url = response.data.data.display_url;
        setTheImg(Img_Url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Service details submit
  const onSubmit = (data) => {
    const serviceDetails = {
      srName:data.srName,
      srDetails:data.srDetails,
      srPrice:data.srPrice,
      srImg:theImg
    }
    
    fetch("https://calm-springs-36524.herokuapp.com/addnewservice",{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(serviceDetails)
    })
  };
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
      {/* Add service section */}
      <div className="container mt-5 text-center">
        <div>
          <h2>Add New Service</h2>
        </div>
        <div className="addService-form p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form-control my-1"
              placeholder="Service Name"
              {...register("srName", { required: true })}
            />
            {errors.srName && (
              <span className="text-danger">This field can't be blank</span>
            )}
            <div className="d-flex">
              <div className="service_price">
                <input
                  type="number"
                  className="form-control my-1"
                  placeholder="Service Price"
                  {...register("srPrice", { required: true })}
                />
                {errors.srPrice && (
                  <span className="text-danger">This field can't be blank</span>
                )}
              </div>
              <div className="service_image">
                <input onChange={handleImageUpload} type="file" className="form-control my-1"/>
              </div>
            </div>
            <textarea placeholder="write description" className="form-control my-1" rows="5" cols="5" {...register("srDetails", { required: true })}/>
            {errors.srDetails && (
                  <span className="text-danger">This field can't be blank</span>
                )}
           <button type="submit" className="btn btn-dark d-block mt-2">
              Add Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addservice;
