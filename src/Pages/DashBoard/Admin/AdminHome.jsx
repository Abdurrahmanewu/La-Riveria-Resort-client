import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";

const AdminHome = () => {
  return (
    <div>
      <DashBoardHeader
        heading={"ERP of La Riveria Resort & Park"}
        subHeading={"Admin Dashboard"}
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
        This page is all about revenue & earnings of La Riveria Resort
      </h2>
    </div>
  );
};

export default AdminHome;
