import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";

const ManageBookings = () => {
  return (
    <div>
      <DashBoardHeader
        heading={"Final confirmation of bookings"}
        subHeading={"Pass these data to resort management"}
      ></DashBoardHeader>
      <h2
        className=" text-center
    text-[clamp(1.125rem,2.2vw+0.6rem,2.25rem)]
    font-semibold tracking-tight leading-tight
    text-gray-900
    md:leading-snug
    text-balance
  "
      >
        Place to confirm the reservation
      </h2>
    </div>
  );
};

export default ManageBookings;
