import { useContext } from "react";
import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import UserReviewBox from "./UserReviewBox";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(reviews);
  return (
    <div>
      <DashBoardHeader
        className=""
        heading="All your precious reviews regarding our services"
        subHeading={
          <>
            We value your feedback
            <br />
            and appreciate your time in sharing it with us
          </>
        }
      />
      <h1>My reviews</h1>
      {reviews.length}
      {reviews.map((review) => {
        console.log(review);
      })}
    </div>
  );
};

export default UserReview;
