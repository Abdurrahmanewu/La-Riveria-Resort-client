import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome to La Riveria Resort Park",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((e) => {
        console.log("error", e);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please check your credentials",
        });
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-3 px-6 py-2 rounded-full bg-[#4285F4] text-white text-lg font-medium shadow-md hover:bg-[#042a67] transition duration-200"
        >
          <div className="bg-white rounded-full p-1">
            <FaGoogle className="text-[#EA4335] text-xl" />
          </div>
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
