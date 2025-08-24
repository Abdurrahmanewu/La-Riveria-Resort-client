import axios from "axios";
export const axiosSecure = axios.create({
  baseURL: "https://la-riveria-resort-server-api.vercel.app/",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
