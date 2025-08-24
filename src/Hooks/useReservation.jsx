import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useReservation = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { refetch, data: reservations = [] } = useQuery({
    queryKey: ["reservations", user?.email],
    queryFn: async () => {
      //Check if admin
      if (user?.email === "admintest@gmail.com") {
        const res = await axiosSecure.get(`/reservations`); // get all
        return res.data;
      } else {
        const res = await axiosSecure.get(
          `/reservations?email=${user?.email}` // filtered
        );
        return res.data;
      }
    },
    enabled: !!user?.email, // only run when user is available
  });

  return [reservations, refetch];
};

export default useReservation;
