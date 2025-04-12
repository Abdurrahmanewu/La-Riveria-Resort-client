import useAxios from "../../../Hooks/useAxios";
import useBooking from "../../../Hooks/useBooking";
import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const UserBookings = () => {
  const [bookings, refetch] = useBooking();
  const axiosSecure = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/bookings/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your reservation has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <DashBoardHeader
        heading={"Finalise Your Reservation"}
        subHeading={"Select those that you wanted to pay for"}
      ></DashBoardHeader>
      <div>
        <div className="flex justify-evenly p-10">
          <h2 className="text-4xl">Items:{bookings.length}</h2>
          <h2 className="text-4xl">Total Price:</h2>
          <button className="btn btn-primary text-2xl">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl text-black font-bold">No.</th>
                <th className="text-xl text-black font-bold">Image</th>
                <th className="text-xl text-black font-bold">Name</th>
                <th className="text-xl text-black font-bold">Order Details</th>
                <th className="text-xl text-black font-bold">Price</th>
                <th className="text-xl text-black font-bold">Remove Order</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings.map(
                (item, index) => (
                  console.log(item),
                  (
                    <tr key={item._id}>
                      <th className="text-xl text-black font-bold">
                        {index + 1}
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-20 w-20">
                              <img
                                className=""
                                src={item.packaImage}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-xl text-black font-bold">
                        {item.packageName}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            Swal.fire({
                              title: `${item.packageName}`,
                              html: `<h2 style="font-size: 24px; font-weight: bold;">Guest Name:${item.data.name}</h2>
                              <h2 style="font-size: 24px; font-weight: bold; margin-top: 20px">Checkin-Date: ${item.data.checkinDate}</h2>
                              <h2 style="font-size: 24px; font-weight: bold; margin-top: 20px">Checkout Date: ${item.data.checkoutDate}</h2>
                              <h2 style="font-size: 24px; font-weight: bold; margin-top: 20px">Cottage Ttype: ${item.data.cottageTtype}</h2>
                              <h2 style="font-size: 24px; font-weight: bold; margin-top: 20px">Number of Guest: ${item.data.guestsNumber}</h2>                            
                              <h2 style="font-size: 24px; font-weight: bold; margin-top: 20px">Phone Number : ${item.data.phone}</h2>
                              <h2 style="font-size: 24px; font-weight: bold; margin-top: 20px">Email: ${item.data.email}</h2>
                              <h2 style="font-size: 24px; font-weight: bold; margin-top: 20px">Special Request: ${item.data.specialRequest}</h2>
                              `,

                              draggable: true,
                            });
                          }}
                          className="btn btn-success text-xl"
                        >
                          Order details
                        </button>
                      </td>
                      <td className="text-xl text-black font-bold">
                        {item.packagePrice}
                      </td>
                      <th>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-ghost btn-lg"
                        >
                          <FaTrashAlt className="text-red-600"></FaTrashAlt>
                        </button>
                      </th>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserBookings;
