import { useContext } from "react";
import { useForm } from "react-hook-form";
import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";
import { motion } from "framer-motion";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useBooking from "../../../Hooks/useBooking";

const UserPayment = () => {
  const { user } = useContext(AuthContext);
  const [bookings, refetch] = useBooking();
  const totalPrice = bookings.reduce(
    (total, item) => total + item.packagePrice,
    0
  );
  const { register, handleSubmit, setValue } = useForm();

  if (user?.email) {
    setValue("email", user.email);
  }

  const onSubmit = async (data) => {
    const paymentData = {
      bookings: bookings,
      totalPrice: totalPrice,
      mail: data,
    };

    fetch("http://localhost:5001/payments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
        refetch();
      });
  };

  return (
    <div>
      <DashBoardHeader
        heading="Finalise Your Reservation"
        subHeading="Make your payment here to complete the booking process."
      />

      <div className="flex items-center justify-center px-4">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6 border border-blue-500"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-blue-100 p-4 rounded-full shadow-md"
            >
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 8c1.1046 0 2-.8954 2-2s-.8954-2-2-2-2 .8954-2 2 .8954 2 2 2zM5 20h14a2 2 0 002-2v-6H3v6a2 2 0 002 2zm0-8h14V9a2 2 0 00-2-2H7a2 2 0 00-2 2v3z" />
              </svg>
            </motion.div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800">
            SSLCommerz Payment
          </h2>

          {/* Payment Method */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-blue-700 bg-blue-50 border border-blue-200 rounded-xl py-3 font-medium text-lg shadow-sm"
          >
            Payment Method: <span className="font-bold">SSLCommerz</span>
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition duration-200 shadow-lg"
          >
            Proceed to Payment
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default UserPayment;
