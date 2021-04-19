import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(
  "pk_test_51Ii1fFHhpENBiH7uJpHtaJHreNVpTgjuBk9pDEtBLvA3mUAW4S6EE4VkURxBbeBFNgBJ7izWIdaUSlFKrugeCIR600ncpOYUvu"
);

const Payments = () => {
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default Payments;
