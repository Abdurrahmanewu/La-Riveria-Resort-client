/* eslint-disable no-unused-vars */
import useReservation from "../../../Hooks/useReservation";
import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";
import Swal from "sweetalert2";

const UserReservation = () => {
  const [reservations, refetch] = useReservation();
  // console.log(reservations);
  const paidBookings = reservations
    .filter((payment) => payment.paidStatus)
    .flatMap((payment) => payment.paymentData?.bookings || []);

  const totalReservations = paidBookings.length;

  const totalPrice = paidBookings.reduce(
    (total, item) => total + (item.packagePrice || 0),
    0
  );

  return (
    <div>
      <DashBoardHeader
        heading={"Your reservation is booked"}
        subHeading={"You can see your reservation details here"}
      ></DashBoardHeader>
      <div className="flex flex-col justify-evenly md:flex-row  items-center gap-4 mb-6">
        <h2 className="text-lg md:text-2xl font-semibold">
          🏡 Number of reservations : {totalReservations}
        </h2>
        <h2 className="text-lg md:text-2xl font-semibold">
          💵 Paid amount of all reservations {""}
          <span className=" font-bold text-black sm:text-4xl lg: text-2xl">
            ৳
          </span>
          :{""}
          {totalPrice}
          {/* Add total calc here */}
        </h2>
      </div>
      {/* Large screens: Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Order Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {reservations
              .filter((payment) => payment.paidStatus) // ✅ Only paid
              .flatMap((payment) => payment.paymentData?.bookings || []) // 🔹 Flatten to bookings
              .map((item, index) => (
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
                      <div style="text-align:left; margin-bottom:10px;">
                        <strong>Guest:</strong> ${item.data.name}<br/>
                        <strong>Check-in:</strong> ${item.data.checkinDate}<br/>
                        <strong>Check-out:</strong> ${item.data.checkoutDate}<br/>
                        <strong>Cottage:</strong> ${item.data.cottageTtype}<br/>
                        <strong>Guests:</strong> ${item.data.guestsNumber}<br/>
                        <strong>Phone:</strong> ${item.data.phone}<br/>
                        <strong>Email:</strong> ${item.data.email}<br/>
                        <strong>Request:</strong> ${item.data.specialRequest}
                      </div>
                    `,
                        })
                      }
                      className="btn btn-sm btn-outline btn-success"
                    >
                      Details
                    </button>
                  </td>
                  <td>${item.packagePrice}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Small screens: Card View */}
      <div className="lg:hidden grid gap-4">
        {reservations
          .filter((payment) => payment.paidStatus) // ✅ Only paid
          .flatMap((payment) => payment.paymentData?.bookings || []) // 🔹 Flatten to bookings
          .map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 space-y-3"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={item.packaImage}
                  alt={item.packageName}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-bold">{item.packageName}</h3>
                  <p className="text-sm text-gray-600">
                    Guest: {item.data.name}
                  </p>
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
                {item.data.specialRequest && (
                  <p>✍️ {item.data.specialRequest}</p>
                )}
                <p className="font-bold text-lg text-green-600">
                  💰 ৳{item.packagePrice}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserReservation;
