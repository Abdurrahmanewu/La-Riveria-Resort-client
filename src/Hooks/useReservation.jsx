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
      const res = await axiosSecure.get(`/reservations?email=${user?.email}`);
      return res.data;
    },
  });
  return [reservations, refetch];
};

export default useReservation;
