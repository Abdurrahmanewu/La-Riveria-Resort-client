/* eslint-disable no-unused-vars */
import React from "react";
import DashBoardHeader from "../Elements/DashBoardHeader/DashBoardHeader";

const PaymentFail = () => {
  return (
    <div>
      <DashBoardHeader
        heading="Payment Status"
        subHeading="Sorry, something went wrong."
      ></DashBoardHeader>
      <h1
        className=" text-center
    text-[clamp(1.125rem,2.2vw+0.6rem,2.25rem)]
    font-semibold tracking-tight leading-tight
    text-gray-900
    md:leading-snug
    text-balance
  "
      >
        Payment Failed
      </h1>
      <p
        className=" text-center
    text-[clamp(1.125rem,2.2vw+0.6rem,2.25rem)]
    font-semibold tracking-tight leading-tight
    text-red-600
    md:leading-snug
    text-balance
  "
      >
        Unfortunately, your payment could not be processed.<br></br> Please try
        again or contact support for assistance.
      </p>
    </div>
  );
};

export default PaymentFail;
