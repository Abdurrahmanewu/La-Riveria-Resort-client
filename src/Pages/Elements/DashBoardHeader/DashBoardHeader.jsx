/* eslint-disable react/prop-types */
import { Slide } from "react-awesome-reveal";

const DashBoardHeader = ({ heading, subHeading }) => {
  return (
    <div className="text-slate-800 text-center pt-12 md:pt-16 pb-8 md:pb-12 bg-gradient-to-b from-[#249761] to-[#a1bd94] mb-8 md:mb-10">
      <Slide direction="down">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 px-2">
          {heading}
        </h1>
      </Slide>
      <div className="divider">
        <Slide direction="up">
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl 
              italic font-semibold 
              break-words sm:break-normal 
              max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
              mx-auto"
          >
            {subHeading}
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default DashBoardHeader;
