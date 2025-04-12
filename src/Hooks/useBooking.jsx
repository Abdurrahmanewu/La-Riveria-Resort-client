import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { refetch, data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user?.email}`);
      return res.data;
    },
  });

  return [bookings, refetch];
};

export default useBooking;
