import { PhoneCall } from "lucide-react";
import logo from "../../assets/Logo/logo_La_Riveria-removebg-preview.png";
const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 md:py-28 lg:py-32 bg-blue-50">
      <div className="bg-blue-500 p-4 rounded-full shadow-lg">
        <PhoneCall className="text-white w-12 h-12 md:w-16 md:h-16" />
      </div>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-6 text-center text-gray-800">
        Having any trouble?
      </h2>
      <p className="text-md md:text-lg lg:text-2xl text-center text-gray-600 mt-4 max-w-lg">
        If you need any assistance, feel free to call us for a one-on-one
        conversation. Our support team is here to help!
      </p>
      <a
        href="tel:+8801743064161"
        className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white text-lg md:text-xl font-medium rounded-full shadow-md hover:bg-blue-700 transition duration-300"
      >
        📞 Call Us Now
      </a>
      <p className="text-md md:text-2lg lg:text-4xl text-center text-gray-600 mt-4 max-w-lg">
        Moblie: +8801743064161
      </p>

      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Contacts;
