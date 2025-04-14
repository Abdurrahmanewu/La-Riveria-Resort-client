import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const usePacakges = () => {
  const axiosSecure = useAxios();
  const { refetch, data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/packages");
      return res.data;
    },
  });

  return [packages, refetch];
};

export default usePacakges;
