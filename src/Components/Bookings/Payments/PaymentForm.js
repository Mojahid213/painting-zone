import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { userContext } from "../../../App";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //context api
  const [logedUser, setLogedUser] = useContext(userContext);

  //For errors
  const [paymentError, setPaymentError] = useState("");
  //For success
  const [paymentSuccess, setPaymentSuccess] = useState("");

  const onSubmit = async (event) => {
    // Block native form submission.
    // event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess("");
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError("");
      
      //Sending data to database
      fetch("https://calm-springs-36524.herokuapp.com/addBookings",{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(logedUser)
      })
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-2"
          defaultValue={logedUser.name}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          className="form-control my-2"
          defaultValue={logedUser.email}
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          className="form-control my-2"
          defaultValue={logedUser.serviceName}
          {...register("serviceName", { required: true })}
        />
        {errors.serviceName && (
          <span className="text-danger">This field is required</span>
        )}
        <div className="border py-2 px-1">
          <CardElement />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-center">
            <p className="text-danger">Service Charge <span className="fw-bold">${logedUser.servicePrice}</span></p>
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary mt-2"
              type="submit"
              disabled={!stripe}
            >
              Pay
            </button>
          </div>
        </div>
      </form>
      {paymentError && <p className="text-danger">{paymentError}</p>}
      {paymentSuccess && <p className="text-success">Successfully paid</p>}
    </div>
  );
};

export default PaymentForm;
