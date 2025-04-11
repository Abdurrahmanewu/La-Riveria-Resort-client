/* eslint-disable react/prop-types */
import { Slide } from "react-awesome-reveal";

const DashBoardHeader = ({ heading, subHeading }) => {
  return (
    <div className="text-slate-800 text-center pt-16 pb-6 bg-gradient-to-b from-[#249761] to-[#a1bd94] mb-10">
      <Slide direction="down" className="text-4xl font-bold mb-3">
        {heading}
      </Slide>
      <div className="divider">
        <Slide direction="up" className="text-3xl italic font-semibold break-words">
          {subHeading}
        </Slide>
      </div>
    </div>
  );
};

export default DashBoardHeader;
