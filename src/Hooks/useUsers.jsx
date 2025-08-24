import { useContext } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";

const useUsers = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users`); // get all
        return res.data;
      }
    },
  });
  return [users, refetch];
};

export default useUsers;
