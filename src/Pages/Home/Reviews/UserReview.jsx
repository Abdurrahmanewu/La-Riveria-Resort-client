import { useContext } from "react";
import DashBoardHeader from "../../Elements/DashBoardHeader/DashBoardHeader";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import UserReviewBox from "./UserReviewBox";
import Swal from "sweetalert2";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(reviews);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reviews/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <UserReviewBox
            key={review._id}
            review={review}
            handleDelete={handleDelete}
          ></UserReviewBox>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
