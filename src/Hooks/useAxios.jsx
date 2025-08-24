import axios from "axios";
export const axiosSecure = axios.create({
  baseURL: "https://lariveria-resort-server.vercel.app/",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
