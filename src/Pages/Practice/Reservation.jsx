import useAxios from "../../Hooks/useAxios";
import useBooking from "../../Hooks/useBooking";
import DashBoardHeader from "../Elements/DashBoardHeader/DashBoardHeader";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Reservation = () => {
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
            Swal.fire(
              "Deleted!",
              "Your reservation has been deleted.",
              "success"
            );
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <DashBoardHeader
        heading="Finalise Your Reservation"
        subHeading="Select those that you wanted to pay for"
      />

      {/* Reservation Summary */}
      <div className="flex flex-col justify-evenly md:flex-row  items-center gap-4 mb-6">
        <h2 className="text-lg md:text-2xl font-semibold">
          🧾 Items: {bookings.length}
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold">
          💵 Total Price: {/* Add total calc here */}
        </h2>
        <button className="btn btn-primary w-4/5 md:w-auto text-lg">
          Pay Now
        </button>
      </div>

      {/* TABLE FOR LARGE DEVICES */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Order Details</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.packaImage}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td>{item.packageName}</td>
                <td>
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: item.packageName,
                        html: `
                          <strong>Guest:</strong> ${item.data.name}<br/>
                          <strong>Check-in:</strong> ${item.data.checkinDate}<br/>
                          <strong>Check-out:</strong> ${item.data.checkoutDate}<br/>
                          <strong>Cottage:</strong> ${item.data.cottageTtype}<br/>
                          <strong>Guests:</strong> ${item.data.guestsNumber}<br/>
                          <strong>Phone:</strong> ${item.data.phone}<br/>
                          <strong>Email:</strong> ${item.data.email}<br/>
                          <strong>Request:</strong> ${item.data.specialRequest}
                        `,
                      })
                    }
                    className="btn btn-sm btn-outline btn-success"
                  >
                    Details
                  </button>
                </td>
                <td>${item.packagePrice}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CARD VIEW FOR SMALL/MEDIUM DEVICES */}
      <div className="lg:hidden grid gap-4">
        {bookings.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg p-4 space-y-3"
          >
            <div className="flex gap-3 items-center">
              <img
                src={item.packaImage}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-bold">{item.packageName}</h3>
                <p className="text-sm text-gray-600">Guest: {item.data.name}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <p>
                📅 {item.data.checkinDate} → {item.data.checkoutDate}
              </p>
              <p>🏠 Cottage: {item.data.cottageTtype}</p>
              <p>👨‍👩‍👧 Guests: {item.data.guestsNumber}</p>
              <p>📞 {item.data.phone}</p>
              <p>📧 {item.data.email}</p>
              {item.data.specialRequest && <p>✍️ {item.data.specialRequest}</p>}
              <p className="font-bold text-lg text-green-600">
                💰 ${item.packagePrice}
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-sm btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
