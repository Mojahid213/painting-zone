import React, { useContext, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Reviews.css"
import { userContext } from "../../../App";

const Reviews = () => {
    //context api
    const[user,setUser] = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //......Submitting reviews
  const onSubmit = (data) => {
    data.name = user.name;
    data.photo = user.photo

    fetch("http://localhost:5050/postReview",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
  };

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
      {/* Reviews forms */}
      <div className="container w-100 mt-5">
        <div className="review-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control my-2"
              placeholder="write your profession(example: Teacher,Oxford)"
              {...register("profession", { required: true })}
            />
            {errors.profession && (
              <span className="text-danger">This field is required</span>
            )}
            <textarea
              placeholder="Write something"
              className="form-control my-2"
              rows="5"
              cols="10"
              {...register("descriptioin", { required: true })}
            />
           
            {errors.descriptioin && (
              <span className="text-danger">This field is required</span>
            )}

            <button type="submit" className="btn btn-primary my-2 d-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
