import DashBoardHeader from "../Elements/DashBoardHeader/DashBoardHeader";

const PaymentSuccess = () => {
  return (
    <div>
      <DashBoardHeader
        heading="Payment Status"
        subHeading="Congratulations, your reservation is done."
      ></DashBoardHeader>
      <h1
        className=" text-center
    text-[clamp(1.125rem,2.2vw+0.6rem,2.25rem)]
    font-semibold tracking-tight leading-tight
    text-orange-600
    md:leading-snug
    text-balance
  "
      >
        Payment Successful
      </h1>
    </div>
  );
};

export default PaymentSuccess;
