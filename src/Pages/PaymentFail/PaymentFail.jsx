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
      <h1 className="text-5xl text-red-600">Payment Failed</h1>
      <p className="text-lg text-gray-700">
        Unfortunately, your payment could not be processed. Please try again or
        contact support for assistance.
      </p>
    </div>
  );
};

export default PaymentFail;
