import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  const axiosSecure = useAxios();
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });

  return [reviews, refetch];
};

export default useReviews;
