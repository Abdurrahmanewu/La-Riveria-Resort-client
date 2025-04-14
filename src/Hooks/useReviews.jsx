/* eslint-disable no-unused-vars */
import { useContext } from "react";
// import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  // const [reviews2, setReviews2] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5001/reviews")
  //     .then((res) => res.json())
  //     .then((data) => setReviews2(data));
  // }, []);
  // console.log(reviews2);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  // console.log(user);
  return [reviews, refetch];
};

export default useReviews;
