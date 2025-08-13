import DashBoardHeader from "../Elements/DashBoardHeader/DashBoardHeader";

const PaymentSuccess = () => {
  return (
    <div>
      <DashBoardHeader
        heading="Payment Status"
        subHeading="Congratulations, your reservation is done."
      ></DashBoardHeader>
      <h1 className="text-5xl text-amber-600">Payment Successful</h1>
    </div>
  );
};

export default PaymentSuccess;
